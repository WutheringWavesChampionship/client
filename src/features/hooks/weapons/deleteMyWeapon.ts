import { useCallback, useContext } from 'react';
import { UserDataContext } from '@entities/context';
import { BaseFetchProps } from '@entities/interfaces';
import { axiosApi } from '@entities/lib';
import { API_ROUTES, API_ROUTES_ENUM } from '@shared/server/constants/api';
import { UserWeaponType } from '@shared/server/interface';

interface Props extends BaseFetchProps<UserWeaponType> {
  id: string | number;
}

export const useDeleteMyWeapon = () => {
  const { setIsLoading, weapons, setWeapons } = useContext(UserDataContext);
  return useCallback(
    async ({ onError, onSuccess, onFinally, id }: Props) => {
      try {
        setIsLoading(true);
        const res = await axiosApi.delete<UserWeaponType>(
          API_ROUTES[API_ROUTES_ENUM.MY_WEAPONS_CURRENT].replace(
            ':id',
            String(id),
          ),
        );
        const newWeapons = [...weapons];
        const currentIndex = newWeapons.findIndex((el) => el.id === id);
        newWeapons.splice(currentIndex, 1);
        setWeapons(newWeapons);
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
    [setIsLoading, setWeapons, weapons],
  );
};
