import { createContext } from 'react';
import { CharacterType, WeaponType } from '@shared/server/interface';

export interface Props {
  isLoading: boolean;
  setIsLoading: (val: boolean) => void;
  characters: Array<CharacterType>;
  weapons: Array<WeaponType>;
  setWeapons: (val: Array<WeaponType>) => void;
  setCharacters: (val: Array<CharacterType>) => void;
}

export const GlobalContext = createContext<Props>({
  characters: [],
  weapons: [],
  isLoading: false,
  setIsLoading: () => {},
  setWeapons: () => {},
  setCharacters: () => {},
});
