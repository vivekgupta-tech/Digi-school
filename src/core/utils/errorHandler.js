import { HTTP_STATUS } from '../config/appConstants';

// ─────────────────────────────────────────────────────────────
//  AppError — normalized error shape used everywhere in the app
// ─────────────────────────────────────────────────────────────
export class AppError {
  constructor({ type, message, status = null, errors = null }) {
    this.type    = type;
    this.message = message;
    this.status  = status;
    this.errors  = errors;   // validation field errors { field: message }
  }
}

// ── Error types ───────────────────────────────────────────────
export const ERROR_TYPES = {
  NETWORK:      'NETWORK_ERROR',
  TIMEOUT:      'TIMEOUT_ERROR',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN:    'FORBIDDEN',
  NOT_FOUND:    'NOT_FOUND',
  VALIDATION:   'VALIDATION_ERROR',
  SERVER:       'SERVER_ERROR',
  UNKNOWN:      'UNKNOWN_ERROR',
};

// ── User-facing messages ──────────────────────────────────────
const ERROR_MESSAGES = {
  [ERROR_TYPES.NETWORK]:      'No internet connection. Please check your network.',
  [ERROR_TYPES.TIMEOUT]:      'Request timed out. Please try again.',
  [ERROR_TYPES.UNAUTHORIZED]: 'Session expired. Please login again.',
  [ERROR_TYPES.FORBIDDEN]:    'You do not have permission to perform this action.',
  [ERROR_TYPES.NOT_FOUND]:    'The requested resource was not found.',
  [ERROR_TYPES.VALIDATION]:   'Please check the form fields and try again.',
  [ERROR_TYPES.SERVER]:       'Something went wrong on our end. Please try again.',
  [ERROR_TYPES.UNKNOWN]:      'An unexpected error occurred.',
};

// ─────────────────────────────────────────────────────────────
//  handleApiError — converts axios error → AppError
//  Called by responseInterceptor — do not call directly
// ─────────────────────────────────────────────────────────────
export const handleApiError = (error) => {
  // 1. Network error (no response — offline / DNS / CORS)
  if (!error.response) {
    if (error.code === 'ECONNABORTED' || error.message?.includes('timeout')) {
      return new AppError({ type: ERROR_TYPES.TIMEOUT, message: ERROR_MESSAGES[ERROR_TYPES.TIMEOUT] });
    }
    return new AppError({ type: ERROR_TYPES.NETWORK, message: ERROR_MESSAGES[ERROR_TYPES.NETWORK] });
  }

  const { status, data } = error.response;
  const serverMessage = data?.message || data?.error || null;

  // 2. HTTP status-based errors
  switch (status) {
    case HTTP_STATUS.UNAUTHORIZED:
      return new AppError({
        type:    ERROR_TYPES.UNAUTHORIZED,
        status,
        message: serverMessage || ERROR_MESSAGES[ERROR_TYPES.UNAUTHORIZED],
      });

    case HTTP_STATUS.FORBIDDEN:
      return new AppError({
        type:    ERROR_TYPES.FORBIDDEN,
        status,
        message: serverMessage || ERROR_MESSAGES[ERROR_TYPES.FORBIDDEN],
      });

    case HTTP_STATUS.NOT_FOUND:
      return new AppError({
        type:    ERROR_TYPES.NOT_FOUND,
        status,
        message: serverMessage || ERROR_MESSAGES[ERROR_TYPES.NOT_FOUND],
      });

    case HTTP_STATUS.UNPROCESSABLE_ENTITY:
    case HTTP_STATUS.BAD_REQUEST: {
      // Spring Boot typically returns validation errors in data.errors or data.fieldErrors
      const fieldErrors = data?.errors || data?.fieldErrors || null;
      return new AppError({
        type:    ERROR_TYPES.VALIDATION,
        status,
        message: serverMessage || ERROR_MESSAGES[ERROR_TYPES.VALIDATION],
        errors:  fieldErrors,
      });
    }

    case HTTP_STATUS.INTERNAL_SERVER_ERROR:
      return new AppError({
        type:    ERROR_TYPES.SERVER,
        status,
        message: serverMessage || ERROR_MESSAGES[ERROR_TYPES.SERVER],
      });

    default:
      return new AppError({
        type:    ERROR_TYPES.UNKNOWN,
        status,
        message: serverMessage || ERROR_MESSAGES[ERROR_TYPES.UNKNOWN],
      });
  }
};

// ─────────────────────────────────────────────────────────────
//  getErrorMessage — safely extract message from anything thrown
// ─────────────────────────────────────────────────────────────
export const getErrorMessage = (error) => {
  if (error instanceof AppError) return error.message;
  if (typeof error === 'string')  return error;
  if (error?.message)             return error.message;
  return ERROR_MESSAGES[ERROR_TYPES.UNKNOWN];
};