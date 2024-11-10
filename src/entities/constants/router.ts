export enum AppRoutesEnum {
  MAIN,

  AUTH_LOGIN,
  AUTH_REGISTRATION,

  SETTINGS,

  CHARACTER_DETAILS,
  CHARACTER_CREATE,

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

  [AppRoutesEnum.CHARACTER_DETAILS]: (id: string | number) =>
    `/characters/${id}`,
  [AppRoutesEnum.CHARACTER_CREATE]: () => '/characters/create',

  [AppRoutesEnum.FORBIDDEN]: () => '/forbidden',
  [AppRoutesEnum.NOT_FOUND]: () => '*',
};
