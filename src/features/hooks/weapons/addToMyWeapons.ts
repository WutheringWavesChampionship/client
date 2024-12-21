import { useCallback } from 'react';
import { BaseFetchProps } from '@entities/interfaces';
import { axiosApi } from '@entities/lib';
import { API_ROUTES, API_ROUTES_ENUM } from '@shared/server/constants/api';
import { UserWeaponType } from '@shared/server/interface';

interface Props extends BaseFetchProps<UserWeaponType> {
  id: string | number;
}

export const useAddToMyWeapons = () => {
  return useCallback(async ({ onError, onSuccess, onFinally, id }: Props) => {
    try {
      const { data } = await axiosApi.post<UserWeaponType>(
        API_ROUTES[API_ROUTES_ENUM.MY_WEAPONS],
        { weaponId: id },
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
