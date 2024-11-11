import { useCallback } from 'react';
import { BaseFetchProps } from '@entities/interfaces';
import { axiosApi } from '@entities/lib';
import { API_ROUTES, API_ROUTES_ENUM } from '@shared/server/constants/api';
import { WeaponType } from '@shared/server/interface';

interface Props extends BaseFetchProps<WeaponType> {
  id: string | number;
}

export const useGetWeaponDetails = () => {
  return useCallback(async ({ onError, onSuccess, onFinally, id }: Props) => {
    try {
      const { data } = await axiosApi.get<WeaponType>(
        API_ROUTES[API_ROUTES_ENUM.WEAPONS_CURRENT].replace(':id', String(id)),
      );
      onSuccess?.(data);
    } catch (error) {
      onError?.(error);
      console.error(error);
    } finally {
      onFinally?.();
    }
  }, []);
};
