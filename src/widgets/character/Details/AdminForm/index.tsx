import classNames from 'classnames';
import {
  Button,
  StyledSelect,
  TextContent,
  TextField,
} from '@shared/components';
import { CharacterType, CreateCharacterType } from '@shared/server/interface';
import { useWidget } from './hook';
import styles from './style.module.scss';

interface Props {
  className?: string;
  initialValues?: CharacterType;
  onSubmit: (data: CreateCharacterType) => Promise<void> | void;
}

export const CharacterAdminForm = ({
  className,
  initialValues,
  onSubmit,
}: Props) => {
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
    elementOptions,
    weaponOptions,
    selectedElement,
    selectedWeapon,
    rarityOptions,
    selectedRarity,
    resetForm,
  } = useWidget({ initialValues: initialValues, onSubmit });
  return (
    <form
      className={classNames(styles.wrapper, className)}
      onSubmit={handleSubmit}
    >
      <TextContent size={24} fontWeight="semibold">
        {t('characterData')}
      </TextContent>
      <TextField
        label={t('characterName.label')}
        placeholder={t('characterName.placeholder')}
        value={values.name}
        error={touchedErrors.name}
        onBlur={() => setFieldTouched('name')}
        onChange={(ev) => setFieldValue('name', ev.target.value)}
      />
      <StyledSelect
        error={touchedErrors.element}
        label={t('element.label')}
        placeholder={t('element.placeholder')}
        options={elementOptions}
        value={selectedElement}
        onBlur={() => setFieldTouched('element')}
        onChange={(val) => {
          setFieldValue('element', val?.value);
        }}
      />
      <StyledSelect
        error={touchedErrors.weaponType}
        label={t('weaponType.label')}
        placeholder={t('weaponType.placeholder')}
        options={weaponOptions}
        value={selectedWeapon}
        onBlur={() => setFieldTouched('weaponType')}
        onChange={(val) => {
          setFieldValue('weaponType', val?.value);
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
        {initialValues && (
          <Button
            type="button"
            variant="danger"
            onClick={handleDelete}
            loading={isLoading}
          >
            {t('delete')}
          </Button>
        )}
      </div>
    </form>
  );
};
