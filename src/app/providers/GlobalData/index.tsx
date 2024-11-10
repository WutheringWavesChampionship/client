'use client';
import { memo, useEffect, useMemo, useState, type ReactNode } from 'react';
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

  useEffect(() => {
    getCharacters({});
    getWeapons({});
  }, [getCharacters, getWeapons]);

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