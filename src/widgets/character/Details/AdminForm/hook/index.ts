import { useCallback, useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useDeleteCharacter } from '@features/hooks';
import { UserDataContext } from '@entities/context';
import { useAppFormik } from '@entities/lib';
import { ISelectOption } from '@shared/components';
import {
  ElementEnum,
  RarityEnum,
  WeaponTypeEnum,
} from '@shared/server/constants';
import { CharacterType, CreateCharacterType } from '@shared/server/interface';
import { createCharacterSchema } from '@shared/server/schemes';

interface Props {
  initialValues?: CharacterType;
  onSubmit: (data: CreateCharacterType) => Promise<void> | void;
}

export const useWidget = ({
  initialValues = {} as CharacterType,
  onSubmit,
}: Props) => {
  const deleteCharacter = useDeleteCharacter();
  const { isLoading } = useContext(UserDataContext);
  const { t } = useTranslation('form');

  const elementOptions: Array<ISelectOption> = useMemo(
    () =>
      Object.values(ElementEnum).map((value) => {
        return {
          value,
          label: t(`dropdowns.element.${value}`),
        };
      }),
    [t],
  );

  const weaponOptions: Array<ISelectOption> = useMemo(
    () =>
      Object.values(WeaponTypeEnum).map((value) => {
        return {
          value,
          label: t(`dropdowns.weapon.${value}`),
        };
      }),
    [t],
  );

  const rarityOptions = useMemo(() => {
    return [
      {
        value: RarityEnum.LEGENDARY,
        label: t(`dropdowns.rarity.${RarityEnum.LEGENDARY}`),
      },
      {
        value: RarityEnum.EPIC,
        label: t(`dropdowns.rarity.${RarityEnum.EPIC}`),
      },
    ];
  }, [t]);

  const {
    values,
    touchedErrors,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
    isValid,
    resetForm,
  } = useAppFormik<CharacterType>({
    initialValues: initialValues,
    onSubmit,
    // onSubmit: (body) => {
    //   submit({
    //     data: body,
    //     id: character.id,
    //     onSuccess: () => {
    //       toast.success(t('updateSuccess'));
    //     },
    //     onError: () => {
    //       toast.error(t('updateError'));
    //     },
    //   });
    // },
    schema: createCharacterSchema,
  });

  const selectedWeapon = useMemo(() => {
    return weaponOptions.find((el) => el.value === values.weaponType);
  }, [weaponOptions, values.weaponType]);

  const selectedElement = useMemo(() => {
    return elementOptions.find((el) => el.value === values.element);
  }, [elementOptions, values.element]);

  const selectedRarity = useMemo(() => {
    return rarityOptions.find((el) => el.value === values.rarity);
  }, [rarityOptions, values.rarity]);

  const handleDelete = useCallback(() => {
    deleteCharacter({
      id: initialValues.id,
      onSuccess: () => {
        toast.success(t('deleteSuccess'));
      },
      onError: () => {
        toast.error(t('deleteError'));
      },
    });
  }, [initialValues.id, deleteCharacter, t]);

  return {
    t,
    values,
    isValid,
    isLoading,
    resetForm,
    handleSubmit,
    touchedErrors,
    setFieldValue,
    handleDelete,
    setFieldTouched,
    elementOptions,
    weaponOptions,
    selectedElement,
    selectedWeapon,
    rarityOptions,
    selectedRarity,
  };
};
