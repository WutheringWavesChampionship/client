import { useCallback, useContext } from 'react';
import { UserDataContext } from '@entities/context';
import { BaseFetchProps } from '@entities/interfaces';
import { axiosApi } from '@entities/lib';
import { API_ROUTES, API_ROUTES_ENUM } from '@shared/server/constants/api';
import { UserType, UpdateUserCharacterType } from '@shared/server/interface';

interface Props extends BaseFetchProps<UserType> {
  data: UpdateUserCharacterType;
  id: string | number;
}

export const useUpdateMyCharacter = () => {
  const { setIsLoading, characters, setCharacters } =
    useContext(UserDataContext);
  return useCallback(
    async ({ onError, onSuccess, onFinally, data, id }: Props) => {
      try {
        setIsLoading(true);
        const res = await axiosApi.patch<UserType>(
          API_ROUTES[API_ROUTES_ENUM.MY_CHARACTERS_CURRENT].replace(
            ':id',
            String(id),
          ),
          data,
        );
        const newCharacters = [...characters];
        const currentIndex = newCharacters.findIndex((el) => el.id === id);
        newCharacters[currentIndex].level = data.level;
        newCharacters[currentIndex].constants = data.constants;
        newCharacters[currentIndex].critValue = data.critValue;
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
