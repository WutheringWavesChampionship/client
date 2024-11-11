import { LoginPage, RegistrationPage } from '@pages/auth';
import { CharacterCreatePage, CharacterDetailsPage } from '@pages/characters';
import { ForbiddenPage, NotFoundPage } from '@pages/error';
import { MainPage } from '@pages/main';
import { SettingsPage } from '@pages/settings';
import { WeaponCreatePage, WeaponDetailsPage } from '@pages/weapons';
import { AppRoutes, AppRoutesEnum } from '@entities/constants';
import { AppRoutesProps } from '@entities/interfaces';

export const routeConfig: Partial<Record<AppRoutesEnum, AppRoutesProps>> = {
  [AppRoutesEnum.MAIN]: {
    path: AppRoutes[AppRoutesEnum.MAIN](),
    element: <MainPage />,
    authOnly: true,
  },
  [AppRoutesEnum.SETTINGS]: {
    path: AppRoutes[AppRoutesEnum.SETTINGS](),
    element: <SettingsPage />,
    authOnly: true,
  },
  [AppRoutesEnum.CHARACTER_CREATE]: {
    path: AppRoutes[AppRoutesEnum.CHARACTER_CREATE](),
    element: <CharacterCreatePage />,
    authOnly: true,
  },
  [AppRoutesEnum.WEAPON_CREATE]: {
    path: AppRoutes[AppRoutesEnum.WEAPON_CREATE](),
    element: <WeaponCreatePage />,
    authOnly: true,
  },
  // Unauthorized
  [AppRoutesEnum.AUTH_LOGIN]: {
    path: AppRoutes[AppRoutesEnum.AUTH_LOGIN](),
    element: <LoginPage />,
  },
  [AppRoutesEnum.AUTH_REGISTRATION]: {
    path: AppRoutes[AppRoutesEnum.AUTH_REGISTRATION](),
    element: <RegistrationPage />,
  },
  [AppRoutesEnum.CHARACTER_DETAILS]: {
    path: AppRoutes[AppRoutesEnum.CHARACTER_DETAILS](':id'),
    element: <CharacterDetailsPage />,
  },
  [AppRoutesEnum.WEAPON_DETAILS]: {
    path: AppRoutes[AppRoutesEnum.WEAPON_DETAILS](':id'),
    element: <WeaponDetailsPage />,
  },

  [AppRoutesEnum.FORBIDDEN]: {
    path: AppRoutes[AppRoutesEnum.FORBIDDEN](),
    element: <ForbiddenPage />,
  },
  [AppRoutesEnum.NOT_FOUND]: {
    path: AppRoutes[AppRoutesEnum.NOT_FOUND](),
    element: <NotFoundPage />,
  },
};
