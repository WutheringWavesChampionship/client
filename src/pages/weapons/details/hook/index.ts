import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useGetWeaponDetails } from '@features/hooks';
import { WeaponType } from '@shared/server/interface';

export const usePage = () => {
  const { t } = useTranslation();
  const { id } = useParams() as { id: string };
  const [data, setData] = useState<WeaponType>();
  const [isLoading, setIsLoading] = useState(false);

  const getWeaponData = useGetWeaponDetails();

  const handleGetData = useCallback(
    (id: string | number) => {
      setIsLoading(true);
      getWeaponData({
        id,
        onSuccess: (val) => {
          setData(val);
        },
        onFinally: () => {
          setIsLoading(false);
        },
        onError: () => {
          toast.error(t('errors.notFoundPage'));
        },
      });
    },
    [getWeaponData, t],
  );

  useEffect(() => {
    handleGetData(id);
  }, [handleGetData, id]);
  return { data, isLoading, t };
};
