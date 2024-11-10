export enum AppRoutesEnum {
  MAIN,

  AUTH_LOGIN,
  AUTH_REGISTRATION,

  SETTINGS,

  // errors
  FORBIDDEN,
  // not found !!!last!!!
  NOT_FOUND,
}

export const AppRoutes = {
  [AppRoutesEnum.MAIN]: () => '/',

  [AppRoutesEnum.AUTH_LOGIN]: () => '/login',
  [AppRoutesEnum.AUTH_REGISTRATION]: () => '/registration',

  [AppRoutesEnum.SETTINGS]: () => '/settings',

  [AppRoutesEnum.FORBIDDEN]: () => '/forbidden',
  [AppRoutesEnum.NOT_FOUND]: () => '*',
};
