import classNames from 'classnames';
import {
  Button,
  StyledSelect,
  TextContent,
  TextField,
} from '@shared/components';
import { WeaponType } from '@shared/server/interface';
import { useWidget } from './hook';
import styles from './style.module.scss';

interface Props {
  className?: string;
  data: WeaponType;
}

export default ({ className, data }: Props) => {
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
    weaponOptions,
    selectedWeapon,
    rarityOptions,
    selectedRarity,
    resetForm,
    selectedStatsType,
    statsTypesOptions,
  } = useWidget({ data });
  return (
    <form
      className={classNames(styles.wrapper, className)}
      onSubmit={handleSubmit}
    >
      <TextContent size={24} fontWeight="semibold">
        {t('weaponData')}
      </TextContent>
      <TextField
        label={t('weaponName.label')}
        placeholder={t('weaponName.placeholder')}
        value={values.name}
        error={touchedErrors.name}
        onBlur={() => setFieldTouched('name')}
        onChange={(ev) =>
          setFieldValue('name', ev.target.value.toLowerCase().trim())
        }
      />
      <StyledSelect
        error={touchedErrors.mainStat}
        label={t('statsType.label')}
        placeholder={t('statsType.placeholder')}
        options={statsTypesOptions}
        value={selectedStatsType}
        onBlur={() => setFieldTouched('mainStat')}
        onChange={(val) => {
          setFieldValue('mainStat', val?.value);
        }}
      />
      <TextField
        label={t('statsValue.label')}
        placeholder={t('statsValue.placeholder')}
        value={values.statValue}
        error={touchedErrors.statValue}
        onBlur={() => setFieldTouched('statValue')}
        onChange={(ev) => {
          const value = Number(ev.target.value);
          if (!Number(isNaN)) {
            setFieldValue('statValue', value);
          }
        }}
      />
      <TextField
        label={t('baseAttack.label')}
        placeholder={t('baseAttack.placeholder')}
        value={values.baseAttack}
        error={touchedErrors.baseAttack}
        onBlur={() => setFieldTouched('baseAttack')}
        onChange={(ev) => {
          const value = Number(ev.target.value);
          if (!Number(isNaN)) {
            setFieldValue('baseAttack', value);
          }
        }}
      />
      <StyledSelect
        error={touchedErrors.type}
        label={t('weaponType.label')}
        placeholder={t('weaponType.placeholder')}
        options={weaponOptions}
        value={selectedWeapon}
        onBlur={() => setFieldTouched('type')}
        onChange={(val) => {
          setFieldValue('type', val?.value);
        }}
      />
      <StyledSelect
        error={touchedErrors.rarity}
        label={t('rarity.label')}
        placeholder={t('rarity.placeholder')}
        options={rarityOptions}
        value={selectedRarity}
        onBlur={() => setFieldTouched('rarity')}
        onChange={(val) => {
          setFieldValue('rarity', val?.value);
        }}
      />
      <div className={styles.submit}>
        <Button type="submit" disabled={!isValid} loading={isLoading}>
          {t('save')}
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={() => resetForm()}
          loading={isLoading}
        >
          {t('cancel')}
        </Button>
        <Button
          type="button"
          variant="danger"
          onClick={handleDelete}
          loading={isLoading}
        >
          {t('delete')}
        </Button>
      </div>
    </form>
  );
};
