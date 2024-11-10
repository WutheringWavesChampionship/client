import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import {
  useGetIsAdmin,
  useGetMyData,
  useGetUserCharactersList,
  useGetUserWeaponsList,
} from '@features/hooks';
import { TOKEN_LOCAL_STORAGE_KEY } from '@entities/lib';
import {
  UserCharacterType,
  UserType,
  UserWeaponType,
} from '@shared/server/interface';

export const useProvider = () => {
  const { t } = useTranslation('auth');
  const [user, setUser] = useState<UserType>();
  const [isAdmin, setIsAdmin] = useState(false);
  const [weapons, setWeapons] = useState<Array<UserWeaponType>>([]);
  const [characters, setCharacters] = useState<Array<UserCharacterType>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMe = useGetMyData();
  const getCharacters = useGetUserCharactersList();
  const getWeapons = useGetUserWeaponsList();
  const getIsAdmin = useGetIsAdmin();

  const token = localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY);

  const handleGetData = useCallback(async () => {
    setIsLoading(true);
    await Promise.all([
      getMe({
        onSuccess: (val) => {
          setUser(val);
        },
        onError: () => {
          localStorage.removeItem(TOKEN_LOCAL_STORAGE_KEY);
          toast.error(t('getUserError'));
        },
      }),
      getCharacters({
        onSuccess: (val) => {
          setCharacters(val || []);
        },
        onError: () => {
          toast.error(t('getCharactersError'));
        },
      }),
      getWeapons({
        onSuccess: (val) => {
          setWeapons(val || []);
        },
        onError: () => {
          toast.error(t('getWeaponsError'));
        },
      }),
      getIsAdmin({
        onSuccess: (val) => {
          setIsAdmin(!!val);
        },
      }),
    ]);
    setIsLoading(false);
  }, [getCharacters, getIsAdmin, getMe, getWeapons, t]);

  useEffect(() => {
    if (!user && token) {
      handleGetData();
    }
  }, [handleGetData, token, user]);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_LOCAL_STORAGE_KEY);
    setUser(undefined);
    setCharacters([]);
    setWeapons([]);
    setIsAdmin(false);
  }, []);

  const value = useMemo(
    () => ({
      user,
      setUser,
      weapons,
      setWeapons,
      characters,
      setCharacters,
      isAdmin,
      setIsAdmin,
      isLoading,
      setIsLoading,
      logout,
    }),
    [characters, isAdmin, isLoading, user, weapons, logout],
  );

  return {
    value,
  };
};
