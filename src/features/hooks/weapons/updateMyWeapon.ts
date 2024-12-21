import { useCallback, useContext } from 'react';
import { UserDataContext } from '@entities/context';
import { BaseFetchProps } from '@entities/interfaces';
import { axiosApi } from '@entities/lib';
import { API_ROUTES, API_ROUTES_ENUM } from '@shared/server/constants/api';
import { WeaponType, UpdateUserWeaponType } from '@shared/server/interface';

interface Props extends BaseFetchProps<WeaponType> {
  data: UpdateUserWeaponType;
  id: string | number;
}

export const useUpdateMyWeapon = () => {
  const { setIsLoading, weapons, setWeapons } = useContext(UserDataContext);
  return useCallback(
    async ({ onError, onSuccess, onFinally, data, id }: Props) => {
      try {
        setIsLoading(true);
        const res = await axiosApi.patch<WeaponType>(
          API_ROUTES[API_ROUTES_ENUM.MY_WEAPONS_CURRENT].replace(
            ':id',
            String(id),
          ),
          data,
        );
        const newCharacters = [...weapons];
        const currentIndex = newCharacters.findIndex((el) => el.id === id);
        newCharacters[currentIndex].level = data.level;
        newCharacters[currentIndex].constants = data.constants;
        setWeapons(newCharacters);
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
