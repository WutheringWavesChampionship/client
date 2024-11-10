import { useCallback } from 'react';
import { BaseFetchProps } from '@entities/interfaces';
import { axiosApi } from '@entities/lib';
import { API_ROUTES, API_ROUTES_ENUM } from '@shared/server/constants/api';
import { WeaponType } from '@shared/server/interface';

export const useGetWeaponsList = () => {
  return useCallback(
    async ({
      onError,
      onSuccess,
      onFinally,
    }: BaseFetchProps<Array<WeaponType>>) => {
      try {
        const { data } = await axiosApi.get<Array<WeaponType>>(
          API_ROUTES[API_ROUTES_ENUM.WEAPONS_LIST],
        );
        onSuccess?.(data);
      } catch (error) {
        onError?.(error);
        console.error(error);
      } finally {
        onFinally?.();
      }
    },
    [],
  );
};
