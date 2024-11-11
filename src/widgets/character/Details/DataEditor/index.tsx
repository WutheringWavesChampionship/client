import classNames from 'classnames';
import { Button, TextContent, TextField } from '@shared/components';
import { UserCharacterType } from '@shared/server/interface';
import { useWidget } from './hook';
import styles from './style.module.scss';

interface Props {
  className?: string;
  userData: UserCharacterType;
}

export default ({ className, userData }: Props) => {
  const {
    handleSubmit,
    setFieldTouched,
    setFieldValue,
    t,
    touchedErrors,
    values,
    isValid,
    isLoading,
    handleDelete,
  } = useWidget({ id: userData.id, userData });
  return (
    <form
      className={classNames(styles.wrapper, className)}
      onSubmit={handleSubmit}
    >
      <TextContent size={24} fontWeight="semibold">
        {t('userCharacterData')}
      </TextContent>
      <div className={styles.constants}>
        <Button
          disabled={values.constants === 0}
          onClick={() => {
            setFieldValue('constants', values.constants - 1);
          }}
          className={styles.button}
        >
          -
        </Button>
        <TextContent fontWeight="semibold" size={24}>
          {values.constants}
        </TextContent>
        <Button
          disabled={values.constants === 6}
          onClick={() => {
            setFieldValue('constants', values.constants + 1);
          }}
          className={styles.button}
        >
          +
        </Button>
      </div>
      <label>
        <TextField
          label={t('level.label')}
          placeholder={t('level.placeholder')}
          value={values.level}
          onChange={(ev) => {
            const newValue = Number(ev.target.value);
            if (Number.isNaN(newValue)) {
              return;
            }
            setFieldValue('level', newValue);
          }}
          error={touchedErrors.level}
          onBlur={() => setFieldTouched('level')}
        />
      </label>
      {/* <label>
        <TextField
          label={t('critValue.label')}
          placeholder={t('critValue.placeholder')}
          value={values.critValue || ''}
          onChange={(ev) => {
            const newValue = Number(ev.target.value);
            if (Number.isNaN(newValue)) {
              return;
            }
            setFieldValue('critValue', newValue);
          }}
        />
      </label> */}

      <div className={styles.actions}>
        <Button
          loading={isLoading}
          className={styles.submit}
          disabled={!isValid}
          type="submit"
        >
          {t('save')}
        </Button>
        <Button
          loading={isLoading}
          variant="danger"
          type="button"
          onClick={handleDelete}
        >
          {t('delete')}
        </Button>
      </div>
    </form>
  );
};
