import classNames from 'classnames';
import { Button, PasswordField, TextField } from '@shared/components';
import { Avatar } from './Avatar';
import { useWidget } from './hook';
import styles from './style.module.scss';

interface Props {
  className?: string;
}

export const UserSettings = ({ className }: Props) => {
  const {
    handleSubmit,
    isValid,
    setFieldTouched,
    setFieldValue,
    touchedErrors,
    values,
    t,
    isLoading,
  } = useWidget();
  return (
    <div className={classNames(styles.wrapper, className)}>
      <Avatar />
      <form onSubmit={handleSubmit} className={styles.form}>
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
        <PasswordField
          placeholder={t('passwordConfirm.placeholder')}
          error={touchedErrors.password_confirmation}
          value={values.password_confirmation}
          onBlur={() => setFieldTouched('password_confirmation')}
          onChange={(ev) =>
            setFieldValue('password_confirmation', ev.target.value)
          }
        />
        <Button
          disabled={!isValid}
          type="submit"
          loading={isLoading}
          size="large"
          className={styles.button}
        >
          {t('actionUpdate')}
        </Button>
      </form>
    </div>
  );
};
