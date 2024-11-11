import { useCallback, useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useDeleteWeapon, useUpdateWeapon } from '@features/hooks';
import { UserDataContext } from '@entities/context';
import { useAppFormik } from '@entities/lib';
import { ISelectOption } from '@shared/components';
import {
  RarityEnum,
  StatTypeEnum,
  WeaponTypeEnum,
} from '@shared/server/constants';
import { WeaponType } from '@shared/server/interface';
import { createWeaponSchema } from '@shared/server/schemes';

interface Props {
  data: WeaponType;
}

export const useWidget = ({ data }: Props) => {
  const submit = useUpdateWeapon();
  const deleteCharacter = useDeleteWeapon();
  const { isLoading } = useContext(UserDataContext);
  const { t } = useTranslation('form');

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
  const statsTypesOptions: Array<ISelectOption> = useMemo(
    () =>
      Object.values(StatTypeEnum).map((value) => {
        return {
          value,
          label: t(`dropdowns.stats.${value}`),
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
      {
        value: RarityEnum.COMMON,
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
    errors,
  } = useAppFormik<WeaponType>({
    initialValues: data,
    onSubmit: (body) => {
      submit({
        data: body,
        id: data.id,
        onSuccess: () => {
          toast.success(t('updateSuccess'));
        },
        onError: () => {
          toast.error(t('updateError'));
        },
      });
    },
    schema: createWeaponSchema,
  });
  console.log(errors);
  const selectedWeapon = useMemo(() => {
    return weaponOptions.find((el) => el.value === values.type);
  }, [weaponOptions, values.type]);

  const selectedRarity = useMemo(() => {
    return rarityOptions.find((el) => el.value === values.rarity);
  }, [rarityOptions, values.rarity]);

  const selectedStatsType = useMemo(() => {
    return statsTypesOptions.find((el) => el.value === values.statValue);
  }, [statsTypesOptions, values.statValue]);

  const handleDelete = useCallback(() => {
    deleteCharacter({
      id: data.id,
      onSuccess: () => {
        toast.success(t('deleteSuccess'));
      },
      onError: () => {
        toast.error(t('deleteError'));
      },
    });
  }, [data.id, deleteCharacter, t]);

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
    weaponOptions,
    selectedWeapon,
    rarityOptions,
    selectedRarity,
    statsTypesOptions,
    selectedStatsType,
  };
};
