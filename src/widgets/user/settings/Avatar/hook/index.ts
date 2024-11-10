import { useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import { useUpdateMyAvatar } from '@features/hooks';
import { UserDataContext } from '@entities/context';
import { IMAGE_TYPES, MAX_IMAGE_SIZE } from '@shared/server/constants';

export const useAvatar = () => {
  const { t } = useTranslation('settings');
  const { user } = useContext(UserDataContext);
  const upload = useUpdateMyAvatar();

  const onDrop = useCallback(
    (files: File[]) => {
      if (files.length) {
        upload({
          data: files[0],
          onError: () => {},
          onSuccess: () => {},
        });
      }
    },
    [upload],
  );

  const { getInputProps, open } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: IMAGE_TYPES,
    maxSize: MAX_IMAGE_SIZE,
  });

  return { t, user, getInputProps, open };
};
