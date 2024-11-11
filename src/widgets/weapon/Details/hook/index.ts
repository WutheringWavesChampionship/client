import { useCallback, useContext, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useAddToMyWeapons, useUpdateWeaponImage } from '@features/hooks';
import { UserDataContext } from '@entities/context';
import { IMAGE_TYPES, MAX_IMAGE_SIZE } from '@shared/server/constants';
import { WeaponType } from '@shared/server/interface';

export const useWidget = (character: WeaponType) => {
  const { t } = useTranslation('form');
  const { weapons, setWeapons, isAdmin } = useContext(UserDataContext);
  const addToMy = useAddToMyWeapons();
  const upload = useUpdateWeaponImage();

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
    () => weapons.find((el) => el.weapon.id == character.id),
    [character.id, weapons],
  );

  const handleAddToMy = useCallback(() => {
    addToMy({
      id: character.id,
      onSuccess: (data) => {
        if (!data) {
          return;
        }
        const newCharacter = { ...data };
        newCharacter.weapon = character;
        setWeapons([...weapons, newCharacter]);
      },
    });
  }, [addToMy, character, setWeapons, weapons]);

  return { userData, t, handleAddToMy, isAdmin, getInputProps, open };
};
