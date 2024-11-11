import { useCallback, useContext, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useAddToMyCharacters, useUpdateCharacterImage } from '@features/hooks';
import { UserDataContext } from '@entities/context';
import { IMAGE_TYPES, MAX_IMAGE_SIZE } from '@shared/server/constants';
import { CharacterType } from '@shared/server/interface';

export const useWidget = (character: CharacterType) => {
  const { t } = useTranslation('form');
  const { characters, setCharacters, isAdmin } = useContext(UserDataContext);
  const addToMy = useAddToMyCharacters();
  const upload = useUpdateCharacterImage();

  const onDrop = useCallback(
    (files: File[]) => {
      if (files.length) {
        upload({
          id: character.id,
          data: files[0],
          onError: () => {},
          onSuccess: () => {
            toast.success(t('updateSuccess'));
          },
        });
      }
    },
    [character.id, t, upload],
  );

  const { getInputProps, open } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: IMAGE_TYPES,
    maxSize: MAX_IMAGE_SIZE,
  });

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

  return { userData, t, handleAddToMy, isAdmin, getInputProps, open };
};
