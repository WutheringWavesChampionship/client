import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRegistration } from '@features/hooks';
import { AppRoutes, AppRoutesEnum } from '@entities/constants';
import { UserDataContext } from '@entities/context';
import { TOKEN_LOCAL_STORAGE_KEY, useAppFormik } from '@entities/lib';
import { RegistrationUserType } from '@shared/server/interface';
import { registrationUserSchema } from '@shared/server/schemes';

const INITIAL_VALUES: RegistrationUserType = {
  password: '',
  username: '',
  password_confirmation: '',
};

export const useWidget = () => {
  const { t } = useTranslation('auth');
  const { isLoading } = useContext(UserDataContext);
  const submit = useRegistration();
  const navigate = useNavigate();

  const {
    values,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
    touchedErrors,
    isValid,
  } = useAppFormik<RegistrationUserType>({
    initialValues: INITIAL_VALUES,
    schema: registrationUserSchema,
    onSubmit: (body) => {
      submit({
        data: body,
        onError: () => {
          toast.error(t('loginError'));
        },
        onSuccess: (res) => {
          if (res && res.token) {
            window.localStorage.setItem(TOKEN_LOCAL_STORAGE_KEY, res.token);
            navigate(AppRoutes[AppRoutesEnum.MAIN]());
          }
        },
      });
    },
  });

  return {
    t,
    values,
    isLoading,
    isValid,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
    touchedErrors,
  };
};
