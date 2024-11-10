import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoutes, AppRoutesEnum } from '@entities/constants';
import {
  Button,
  PasswordField,
  TextContent,
  TextField,
} from '@shared/components';
import { useWidget } from './hook';
import styles from './style.module.scss';

interface Props {
  className?: string;
}

export const LoginWidget = ({ className }: Props) => {
  const {
    t,
    handleSubmit,
    setFieldTouched,
    setFieldValue,
    touchedErrors,
    values,
    isValid,
    isLoading,
  } = useWidget();
  return (
    <form
      className={classNames(styles.wrapper, className)}
      onSubmit={handleSubmit}
    >
      <TextContent
        variant="h1"
        size={32}
        fontWeight="bold"
        className={classNames(styles.centred, styles.title)}
      >
        {t('login.title')}
      </TextContent>
      <TextField
        placeholder={t('username.placeholder')}
        error={touchedErrors.username}
        value={values.username}
        onBlur={() => setFieldTouched('username')}
        onChange={(ev) => setFieldValue('username', ev.target.value)}
      />
      <PasswordField
        placeholder={t('password.placeholder')}
        error={touchedErrors.password}
        value={values.password}
        onBlur={() => setFieldTouched('password')}
        onChange={(ev) => setFieldValue('password', ev.target.value)}
      />
      <Button
        disabled={!isValid}
        type="submit"
        loading={isLoading}
        size="large"
        className={styles.button}
      >
        {t('login.submit')}
      </Button>
      <TextContent
        variant="p"
        size={14}
        fontWeight="regular"
        className={classNames(styles.centred, styles.label)}
      >
        {t('login.doNotHave')}
        <Link
          to={AppRoutes[AppRoutesEnum.AUTH_REGISTRATION]()}
          className={classNames(styles.link)}
        >
          {t('login.signUp')}
        </Link>
      </TextContent>
    </form>
  );
};
