// ─────────────────────────────────────────────────────────────
//  responseHandler — wraps raw axios response into a consistent
//  shape that every feature's repository expects.
//
//  Spring Boot response shape assumed:
//  { success: true, message: "...", data: { ... } }
//  or for lists:
//  { success: true, data: { content: [], totalElements, page } }
// ─────────────────────────────────────────────────────────────

/**
 * Unwraps a successful axios response.
 * @param {Object} axiosResponse — raw axios response object
 * @returns {{ data, message, meta }}
 */
export const handleSuccess = (axiosResponse) => {
  const body = axiosResponse?.data;
  return {
    data:    body?.data    ?? body   ?? null,
    message: body?.message ?? 'Success',
    meta:    body?.meta    ?? extractPaginationMeta(body?.data),
  };
};

/**
 * Extracts Spring Boot Page metadata if present.
 * Spring Boot Page: { content:[], totalElements, totalPages, number, size }
 */
const extractPaginationMeta = (data) => {
  if (!data || typeof data !== 'object') return null;
  if (!('totalElements' in data)) return null;
  return {
    totalElements: data.totalElements,
    totalPages:    data.totalPages,
    page:          data.number,
    size:          data.size,
  };
};

/**
 * Wraps mock data into the same shape as handleSuccess.
 * Use this in mock repositories so components stay identical.
 * @param {any} mockData
 * @param {string} message
 */
export const mockSuccess = (mockData, message = 'Success (mock)') => ({
  data:    mockData,
  message,
  meta:    extractPaginationMeta(mockData),
});