import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useLogin } from '@features/hooks';
import { AppRoutes, AppRoutesEnum } from '@entities/constants';
import { UserDataContext } from '@entities/context';
import { TOKEN_LOCAL_STORAGE_KEY, useAppFormik } from '@entities/lib';
import { LoginUserType } from '@shared/server/interface';
import { loginUserSchema } from '@shared/server/schemes';

const INITIAL_VALUES: LoginUserType = {
  password: '',
  username: '',
};

export const useWidget = () => {
  const { t } = useTranslation('auth');
  const { isLoading } = useContext(UserDataContext);
  const submit = useLogin();
  const navigate = useNavigate();

  const {
    values,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
    touchedErrors,
    isValid,
  } = useAppFormik<LoginUserType>({
    initialValues: INITIAL_VALUES,
    schema: loginUserSchema,
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
