import { useCallback, useContext } from 'react';
import { UserDataContext } from '@entities/context';
import { BaseFetchProps } from '@entities/interfaces';
import { axiosApi } from '@entities/lib';
import { API_ROUTES, API_ROUTES_ENUM } from '@shared/server/constants/api';
import { UserType } from '@shared/server/interface';

interface Props extends BaseFetchProps<UserType> {
  id: string | number;
}

export const useDeleteMyCharacter = () => {
  const { setIsLoading, characters, setCharacters } =
    useContext(UserDataContext);
  return useCallback(
    async ({ onError, onSuccess, onFinally, id }: Props) => {
      try {
        setIsLoading(true);
        const res = await axiosApi.delete<UserType>(
          API_ROUTES[API_ROUTES_ENUM.MY_CHARACTERS_CURRENT].replace(
            ':id',
            String(id),
          ),
        );
        const newCharacters = [...characters];
        const currentIndex = newCharacters.findIndex((el) => el.id === id);
        newCharacters.splice(currentIndex, 1);
        setCharacters(newCharacters);
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
    [characters, setCharacters, setIsLoading],
  );
};
