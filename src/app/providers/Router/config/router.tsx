import { LoginPage, RegistrationPage } from '@pages/auth';
import { ForbiddenPage, NotFoundPage } from '@pages/error';
import { AppRoutes, AppRoutesEnum } from '@entities/constants';
import { AppRoutesProps } from '@entities/interfaces';

export const routeConfig: Partial<Record<AppRoutesEnum, AppRoutesProps>> = {
  [AppRoutesEnum.MAIN]: {
    path: AppRoutes[AppRoutesEnum.MAIN](),
    element: <NotFoundPage />,
    authOnly: true,
  },
  [AppRoutesEnum.AUTH_LOGIN]: {
    path: AppRoutes[AppRoutesEnum.AUTH_LOGIN](),
    element: <LoginPage />,
  },
  [AppRoutesEnum.AUTH_REGISTRATION]: {
    path: AppRoutes[AppRoutesEnum.AUTH_REGISTRATION](),
    element: <RegistrationPage />,
  },

  /* [AppRoutesEnum.SETTINGS]: {
    path: AppRoutes[AppRoutesEnum.SETTINGS](),
    element: <SettingsPage />,
    authOnly: true,
  }, */

  [AppRoutesEnum.FORBIDDEN]: {
    path: AppRoutes[AppRoutesEnum.FORBIDDEN](),
    element: <ForbiddenPage />,
  },
  [AppRoutesEnum.NOT_FOUND]: {
    path: AppRoutes[AppRoutesEnum.NOT_FOUND](),
    element: <NotFoundPage />,
  },
};
