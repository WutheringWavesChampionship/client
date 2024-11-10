import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes, AppRoutesEnum } from '@entities/constants';
import { UserDataContext } from '@entities/context';

interface RequireAuthProps {
  children: JSX.Element;
}

export function RequireAuth({ children }: RequireAuthProps) {
  const { user } = useContext(UserDataContext);
  const navigate = useNavigate();
  if (user) {
    return children;
  } else {
    navigate(AppRoutes[AppRoutesEnum.AUTH_LOGIN]());
    return children;
  }
}
