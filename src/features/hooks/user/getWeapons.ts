import { useCallback } from 'react';
import { BaseFetchProps } from '@entities/interfaces';
import { axiosApi } from '@entities/lib';
import { API_ROUTES, API_ROUTES_ENUM } from '@shared/server/constants/api';
import { UserWeaponType } from '@shared/server/interface';

export const useGetUserWeaponsList = () => {
  return useCallback(
    async ({
      onError,
      onSuccess,
      onFinally,
    }: BaseFetchProps<Array<UserWeaponType>>) => {
      try {
        const { data } = await axiosApi.get<Array<UserWeaponType>>(
          API_ROUTES[API_ROUTES_ENUM.MY_WEAPONS],
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
