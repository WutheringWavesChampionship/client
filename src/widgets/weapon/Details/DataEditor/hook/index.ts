import { useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDeleteMyWeapon, useUpdateMyWeapon } from '@features/hooks';
import { AppRoutes, AppRoutesEnum } from '@entities/constants';
import { UserDataContext } from '@entities/context';
import { useAppFormik } from '@entities/lib';
import { UpdateUserWeaponType } from '@shared/server/interface';
import { updateUserWeaponSchema } from '@shared/server/schemes';

interface Props {
  userData: UpdateUserWeaponType;
  id: number;
}

export const useWidget = ({ userData, id }: Props) => {
  const navigate = useNavigate();
  const submit = useUpdateMyWeapon();
  const deleteCharacter = useDeleteMyWeapon();
  const { isLoading } = useContext(UserDataContext);
  const { t } = useTranslation('form');

  const {
    values,
    touchedErrors,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
    isValid,
  } = useAppFormik<UpdateUserWeaponType>({
    initialValues: {
      constants: userData.constants || 1,
      level: userData.level,
    },
    onSubmit: (body) => {
      submit({
        data: body,
        id,
        onSuccess: () => {
          toast.success(t('updateSuccess'));
          navigate(AppRoutes[AppRoutesEnum.SETTINGS]());
        },
        onError: () => {
          toast.error(t('updateError'));
        },
      });
    },
    schema: updateUserWeaponSchema,
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
