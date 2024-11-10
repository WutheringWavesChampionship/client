import { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AppRoutes, AppRoutesEnum } from '@entities/constants';
import { UserDataContext } from '@entities/context';
import { TOKEN_LOCAL_STORAGE_KEY } from '@entities/lib';
import { PageLoader } from '@shared/components';

interface RequireAuthProps {
  children: JSX.Element;
}

export function RequireAuth({ children }: RequireAuthProps) {
  const { user } = useContext(UserDataContext);
  const token = localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY);
  const location = useLocation();
  if (!token) {
    return (
      <Navigate
        to={AppRoutes[AppRoutesEnum.AUTH_LOGIN]()}
        state={{ from: location }}
        replace
      />
    );
  }
  if (user) {
    return children;
  } else {
    return <PageLoader />;
  }
}
