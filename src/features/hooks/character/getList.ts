import { useCallback, useContext } from 'react';
import { GlobalContext } from '@entities/context';
import { BaseFetchProps } from '@entities/interfaces';
import { axiosApi } from '@entities/lib';
import { API_ROUTES, API_ROUTES_ENUM } from '@shared/server/constants/api';
import { CharacterType } from '@shared/server/interface';

export const useGetCharactersList = () => {
  const { setIsLoading, setCharacters } = useContext(GlobalContext);
  return useCallback(
    async ({
      onError,
      onSuccess,
      onFinally,
    }: BaseFetchProps<Array<CharacterType>>) => {
      try {
        setIsLoading(true);
        const { data } = await axiosApi.get<Array<CharacterType>>(
          API_ROUTES[API_ROUTES_ENUM.CHARACTERS_LIST],
        );
        setCharacters(data);
        onSuccess?.(data);
      } catch (error) {
        onError?.(error);
        console.error(error);
      } finally {
        setIsLoading(false);
        onFinally?.();
      }
    },
    [setCharacters, setIsLoading],
  );
};
