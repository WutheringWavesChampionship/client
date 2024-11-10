'use client';
import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { useGetCharactersList, useGetWeaponsList } from '@features/hooks';
import { GlobalContext } from '@entities/context';
import { CharacterType, WeaponType } from '@shared/server/interface';

interface Props {
  children: ReactNode;
}

export const GlobalDataProvider = memo(({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [weapons, setWeapons] = useState<Array<WeaponType>>([]);
  const [characters, setCharacters] = useState<Array<CharacterType>>([]);
  const getCharacters = useGetCharactersList();
  const getWeapons = useGetWeaponsList();

  const getData = useCallback(async () => {
    setIsLoading(true);
    await Promise.all([
      getCharacters({
        onSuccess: (data) => {
          setCharacters(data || []);
        },
      }),
      getWeapons({
        onSuccess: (data) => {
          setWeapons(data || []);
        },
      }),
    ]);
    setIsLoading(false);
  }, [getCharacters, getWeapons]);

  useEffect(() => {
    getData();
  }, [getData]);

  const value = useMemo(
    () => ({
      isLoading,
      setIsLoading,
      characters,
      weapons,
      setWeapons,
      setCharacters,
    }),
    [characters, isLoading, weapons],
  );
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
});
