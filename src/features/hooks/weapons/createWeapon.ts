import { useCallback, useContext } from 'react';
import { GlobalContext } from '@entities/context';
import { BaseFetchProps } from '@entities/interfaces';
import { axiosApi } from '@entities/lib';
import { API_ROUTES, API_ROUTES_ENUM } from '@shared/server/constants/api';
import { WeaponType, CreateWeaponType } from '@shared/server/interface';

interface Props extends BaseFetchProps<WeaponType> {
  data: CreateWeaponType;
}

export const useCreateWeapon = () => {
  const { setIsLoading } = useContext(GlobalContext);
  return useCallback(
    async ({ onError, onSuccess, onFinally, data }: Props) => {
      try {
        setIsLoading(true);
        const res = await axiosApi.post<WeaponType>(
          API_ROUTES[API_ROUTES_ENUM.WEAPONS_LIST],
          data,
        );
        // setUser(res.data);
        onSuccess?.(res.data);
      } catch (error) {
        onError?.(error);
        console.error(error);
      } finally {
        setIsLoading(false);
        onFinally?.();
      }
    },
    [setIsLoading],
  );
};
