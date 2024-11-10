import { useCallback, useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAddToMyCharacters } from '@features/hooks';
import { UserDataContext } from '@entities/context';
import { CharacterType } from '@shared/server/interface';

export const useWidget = (character: CharacterType) => {
  const { t } = useTranslation('characters');
  const { characters, setCharacters } = useContext(UserDataContext);
  const addToMy = useAddToMyCharacters();

  const userData = useMemo(
    () => characters.find((el) => el.character.id == character.id),
    [characters, character.id],
  );

  const handleAddToMy = useCallback(() => {
    addToMy({
      id: character.id,
      onSuccess: (data) => {
        if (!data) {
          return;
        }
        const newCharacter = { ...data };
        newCharacter.character = character;
        setCharacters([...characters, newCharacter]);
      },
    });
  }, [addToMy, character, characters, setCharacters]);

  return { userData, t, handleAddToMy };
};
