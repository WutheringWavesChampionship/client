'use client';
import { createContext } from 'react';
import {
  UserCharacterType,
  UserType,
  UserWeaponType,
} from '@shared/server/interface';

interface Props {
  user?: UserType;
  characters?: Array<UserCharacterType>;
  weapons?: Array<UserWeaponType>;
  setCharacters: (user?: Array<UserCharacterType>) => void;
  setWeapons: (user?: Array<UserWeaponType>) => void;
}

export const UserDataContext = createContext<Props>({
  setCharacters: () => {},
  setWeapons: () => {},
});
