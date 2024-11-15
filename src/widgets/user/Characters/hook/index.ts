import { useContext, useMemo } from 'react';
import { GlobalContext, UserDataContext } from '@entities/context';

export const useWidget = () => {
  const { characters } = useContext(GlobalContext);
  const { characters: userCharacters, isAdmin } = useContext(UserDataContext);

  const data = useMemo(() => {
    return characters.map((character) => {
      const userData = userCharacters.find(
        (el) => el.character.id === character.id,
      );
      return { ...character, userData };
    });
  }, [characters, userCharacters]);

  return { data, isAdmin };
};
