import { Navigate } from 'react-router-dom';
import { storage } from '../utils/storage';
import { STORAGE_KEYS, ROUTES } from '../config/appConstants';

/**
 * ProtectedRoute — redirects to /login if no token found.
 * Wrap any route that requires authentication.
 */
const ProtectedRoute = ({ children }) => {
  const token = storage.get(STORAGE_KEYS.AUTH_TOKEN);
  if (!token) return <Navigate to={ROUTES.LOGIN} replace />;
  return children;
};

export default ProtectedRoute;