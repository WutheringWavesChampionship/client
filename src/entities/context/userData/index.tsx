'use client';
import { createContext } from 'react';
import {
  UserCharacterType,
  UserType,
  UserWeaponType,
} from '@shared/server/interface';

interface Props {
  isLoading: boolean;
  setIsLoading: (val: boolean) => void;
  user?: UserType;
  isAdmin: boolean;
  characters: Array<UserCharacterType>;
  weapons: Array<UserWeaponType>;
  setCharacters: (data: Array<UserCharacterType>) => void;
  setWeapons: (data: Array<UserWeaponType>) => void;
  setIsAdmin: (data: boolean) => void;
  setUser: (data?: UserType) => void;
  logout: () => void | Promise<void>;
}

export const UserDataContext = createContext<Props>({
  setCharacters: () => {},
  setWeapons: () => {},
  setIsAdmin: () => {},
  setUser: () => {},
  isAdmin: false,
  characters: [],
  weapons: [],
  isLoading: false,
  setIsLoading: () => {},
  logout: () => {},
});
