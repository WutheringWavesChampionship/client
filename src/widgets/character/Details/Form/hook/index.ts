import { useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useDeleteMyCharacter, useUpdateMyCharacter } from '@features/hooks';
import { UserDataContext } from '@entities/context';
import { useAppFormik } from '@entities/lib';
import { UpdateUserCharacterType } from '@shared/server/interface';
import { updateUserCharacterSchema } from '@shared/server/schemes';

interface Props {
  userData: UpdateUserCharacterType;
  id: number;
}

export const useWidget = ({ userData, id }: Props) => {
  const submit = useUpdateMyCharacter();
  const deleteCharacter = useDeleteMyCharacter();
  const { isLoading } = useContext(UserDataContext);
  const { t } = useTranslation('form');

  const {
    values,
    touchedErrors,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
    isValid,
  } = useAppFormik<UpdateUserCharacterType>({
    initialValues: {
      constants: userData.constants,
      level: userData.level,
      critValue: userData.critValue,
    },
    onSubmit: (body) => {
      submit({
        data: body,
        id,
        onSuccess: () => {
          toast.success(t('updateSuccess'));
        },
        onError: () => {
          toast.error(t('updateError'));
        },
      });
    },
    schema: updateUserCharacterSchema,
  });

  const handleDelete = useCallback(() => {
    deleteCharacter({
      id,
      onSuccess: () => {
        toast.success(t('deleteSuccess'));
      },
      onError: () => {
        toast.error(t('deleteError'));
      },
    });
  }, [deleteCharacter, id, t]);
  return {
    t,
    values,
    isValid,
    isLoading,
    touchedErrors,
    handleSubmit,
    setFieldValue,
    handleDelete,
    setFieldTouched,
  };
};
