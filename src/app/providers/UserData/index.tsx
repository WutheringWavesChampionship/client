'use client';

import { useMemo, useState, type ReactNode } from 'react';
import { UserDataContext } from '@entities/context';
import {
  UserCharacterType,
  UserType,
  UserWeaponType,
} from '@shared/server/interface';

interface Props {
  children: ReactNode;
}

export const UserDataProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserType>();
  const [weapons, setWeapons] = useState<Array<UserWeaponType>>();
  const [characters, setCharacters] = useState<Array<UserCharacterType>>();

  const value = useMemo(
    () => ({ user, setUser, weapons, setWeapons, characters, setCharacters }),
    [characters, user, weapons],
  );
  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};
