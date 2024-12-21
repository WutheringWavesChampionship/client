import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCreateCharacter } from '@features/hooks';
import { AppRoutes, AppRoutesEnum } from '@entities/constants';
import { CreateCharacterType } from '@shared/server/interface';

export const usePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const submit = useCreateCharacter();
  const handleCreate = useCallback(
    (data: CreateCharacterType) => {
      submit({
        data,
        onSuccess: (data) => {
          toast.success(t('updateSuccess'));
          navigate(AppRoutes[AppRoutesEnum.CHARACTER_DETAILS](data?.id || ''));
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
