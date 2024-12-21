import { useCallback, useContext } from 'react';
import { GlobalContext } from '@entities/context';
import { BaseFetchProps } from '@entities/interfaces';
import { axiosApi } from '@entities/lib';
import { API_ROUTES, API_ROUTES_ENUM } from '@shared/server/constants/api';
import { WeaponType, CreateWeaponType } from '@shared/server/interface';

interface Props extends BaseFetchProps<WeaponType> {
  data: CreateWeaponType;
  id: string | number;
}

export const useUpdateWeapon = () => {
  const { setIsLoading, weapons, setWeapons } = useContext(GlobalContext);
  return useCallback(
    async ({ onError, onSuccess, onFinally, data, id }: Props) => {
      try {
        setIsLoading(true);
        const res = await axiosApi.patch<WeaponType>(
          API_ROUTES[API_ROUTES_ENUM.WEAPONS_CURRENT].replace(
            ':id',
            String(id),
          ),
          data,
        );
        const newData = [...weapons];
        const currentIndex = newData.findIndex((el) => el.id === id);
        newData[currentIndex].name = data.name;
        newData[currentIndex].rarity = data.rarity;
        newData[currentIndex].type = data.type;
        setWeapons(newData);
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
