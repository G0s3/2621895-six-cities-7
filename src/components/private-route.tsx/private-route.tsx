import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  authorizationStatus: boolean;
  children: JSX.Element;
};

export const PrivateRoute = ({
  children,
  authorizationStatus,
}: PrivateRouteProps): JSX.Element =>
  authorizationStatus ? children : <Navigate to={'/login'} />;
