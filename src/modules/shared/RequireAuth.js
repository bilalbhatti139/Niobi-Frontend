import { useSelector } from 'react-redux';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const RequireAuth = ({ allowedRoles }) => {
  const { accessToken, persist } = useAuth();
  const { currentRole } = useSelector(({ authorization }) => ({
    currentRole: authorization?.currentRole
  }));
  const location = useLocation();
  // return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
  //   <Outlet />
  // ) : auth?.access_token ? ( //changed from user to accessToken to persist login after refresh
  //   <Navigate to="/unauthorized" state={{ from: location }} replace />
  // ) : (
  //   <Navigate to="/login" state={{ from: location }} replace />
  // );

  console.log(accessToken, 'allowed user');
  return allowedRoles?.includes(currentRole) ? (
    <Outlet />
  ) : accessToken ? ( //changed from user to accessToken to persist login after refresh
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
