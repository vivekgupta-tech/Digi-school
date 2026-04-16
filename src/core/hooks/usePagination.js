import { useState, useCallback } from 'react';
import { PAGE_SIZE } from '../config/appConstants';

const usePagination = (initialPage = 0, initialSize = PAGE_SIZE) => {
  const [page, setPage]   = useState(initialPage);
  const [size, setSize]   = useState(initialSize);
  const [total, setTotal] = useState(0);

  const totalPages = Math.ceil(total / size) || 1;

  const goTo    = useCallback((p) => setPage(Math.max(0, p)), []);
  const next    = useCallback(() => setPage((p) => Math.min(p + 1, totalPages - 1)), [totalPages]);
  const prev    = useCallback(() => setPage((p) => Math.max(p - 1, 0)), []);
  const reset   = useCallback(() => setPage(0), []);
  const setMeta = useCallback((meta) => {
    if (meta?.totalElements != null) setTotal(meta.totalElements);
  }, []);

  return { page, size, total, totalPages, goTo, next, prev, reset, setSize, setMeta };
};

export default usePagination;