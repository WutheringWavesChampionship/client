import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCreateWeapon } from '@features/hooks';
import { AppRoutes, AppRoutesEnum } from '@entities/constants';
import { CreateWeaponType } from '@shared/server/interface';

export const usePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const submit = useCreateWeapon();
  const handleCreate = useCallback(
    (data: CreateWeaponType) => {
      submit({
        data,
        onSuccess: (data) => {
          toast.success(t('updateSuccess'));
          navigate(AppRoutes[AppRoutesEnum.WEAPON_DETAILS](data?.id || ''));
        },
        onError: () => {
          toast.error(t('updateError'));
        },
      });
    },
    [navigate, submit, t],
  );
  return { t, handleCreate };
};
