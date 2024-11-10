import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useUpdateMe } from '@features/hooks/user/updateMe';
import { UserDataContext } from '@entities/context';
import { useAppFormik } from '@entities/lib';
import { RegistrationUserType } from '@shared/server/interface';
import { registrationUserSchema } from '@shared/server/schemes';

export const useWidget = () => {
  const { user, isLoading } = useContext(UserDataContext);
  const { t } = useTranslation('auth');
  const submit = useUpdateMe();

  const {
    values,
    handleSubmit,
    touchedErrors,
    setFieldTouched,
    setFieldValue,
    isValid,
  } = useAppFormik<RegistrationUserType>({
    initialValues: {
      username: user!.username,
      password: '',
      password_confirmation: '',
    },
    schema: registrationUserSchema,
    onSubmit: (body) => {
      submit({
        data: body,
        onError: () => {
          toast.error(t('updateError'));
        },
        onSuccess: () => {
          toast.success(t('updateSuccess'));
        },
      });
    },
  });
  return {
    t,
    values,
    handleSubmit,
    touchedErrors,
    setFieldTouched,
    setFieldValue,
    isValid,
    isLoading,
  };
};
