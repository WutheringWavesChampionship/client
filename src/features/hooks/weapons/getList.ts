import { useCallback, useContext } from 'react';
import { GlobalContext } from '@entities/context';
import { BaseFetchProps } from '@entities/interfaces';
import { axiosApi } from '@entities/lib';
import { API_ROUTES, API_ROUTES_ENUM } from '@shared/server/constants/api';
import { WeaponType } from '@shared/server/interface';

export const useGetWeaponsList = () => {
  const { setIsLoading, setWeapons } = useContext(GlobalContext);
  return useCallback(
    async ({
      onError,
      onSuccess,
      onFinally,
    }: BaseFetchProps<Array<WeaponType>>) => {
      try {
        setIsLoading(true);
        const { data } = await axiosApi.get<Array<WeaponType>>(
          API_ROUTES[API_ROUTES_ENUM.WEAPONS_LIST],
        );
        setWeapons(data);
        onSuccess?.(data);
      } catch (error) {
        onError?.(error);
        console.error(error);
      } finally {
        setIsLoading(false);
        onFinally?.();
      }
    },
    [setWeapons, setIsLoading],
  );
};