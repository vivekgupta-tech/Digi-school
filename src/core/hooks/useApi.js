import { useState, useCallback, useRef } from 'react';
import { getErrorMessage } from '../utils/errorHandler';

// ─────────────────────────────────────────────────────────────
//  useApi — universal hook for any async API call
//
//  States: idle → loading → success | error | empty
//
//  Usage:
//    const { data, status, error, execute, reset } = useApi();
//    await execute(() => dashboardRepository.getStats());
// ─────────────────────────────────────────────────────────────

export const API_STATUS = {
  IDLE:    'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR:   'error',
  EMPTY:   'empty',
};

const useApi = () => {
  const [status, setStatus]   = useState(API_STATUS.IDLE);
  const [data,   setData]     = useState(null);
  const [error,  setError]    = useState(null);
  const [meta,   setMeta]     = useState(null);  // pagination meta

  // Prevent state update if component unmounted
  const mountedRef = useRef(true);
  const set = (fn) => { if (mountedRef.current) fn(); };

  /**
   * execute — call any repository function
   * @param {Function} apiFn — () => Promise<{ data, meta }>
   * @param {{ onSuccess, onError }} callbacks
   */
  const execute = useCallback(async (apiFn, { onSuccess, onError } = {}) => {
    set(() => {
      setStatus(API_STATUS.LOADING);
      setError(null);
    });

    try {
      const result = await apiFn();
      const isEmpty = isEmptyResult(result?.data);

      set(() => {
        setData(result?.data ?? null);
        setMeta(result?.meta ?? null);
        setStatus(isEmpty ? API_STATUS.EMPTY : API_STATUS.SUCCESS);
      });

      onSuccess?.(result);
      return result;
    } catch (err) {
      const message = getErrorMessage(err);
      set(() => {
        setError(message);
        setStatus(API_STATUS.ERROR);
      });
      onError?.(err);
      throw err;
    }
  }, []);

  const reset = useCallback(() => {
    set(() => {
      setStatus(API_STATUS.IDLE);
      setData(null);
      setError(null);
      setMeta(null);
    });
  }, []);

  return {
    status,
    data,
    error,
    meta,
    execute,
    reset,
    isIdle:    status === API_STATUS.IDLE,
    isLoading: status === API_STATUS.LOADING,
    isSuccess: status === API_STATUS.SUCCESS,
    isError:   status === API_STATUS.ERROR,
    isEmpty:   status === API_STATUS.EMPTY,
  };
};

// ── Helpers ───────────────────────────────────────────────────
const isEmptyResult = (data) => {
  if (data === null || data === undefined) return true;
  if (Array.isArray(data) && data.length === 0) return true;
  if (typeof data === 'object' && 'content' in data && data.content.length === 0) return true;
  return false;
};

export default useApi;