import { useCallback } from 'react';
import { BaseFetchProps } from '@entities/interfaces';
import { axiosApi } from '@entities/lib';
import { API_ROUTES, API_ROUTES_ENUM } from '@shared/server/constants/api';
import { CharacterType } from '@shared/server/interface';

export const useGetCharactersList = () => {
  return useCallback(
    async ({
      onError,
      onSuccess,
      onFinally,
    }: BaseFetchProps<Array<CharacterType>>) => {
      try {
        const { data } = await axiosApi.get<Array<CharacterType>>(
          API_ROUTES[API_ROUTES_ENUM.CHARACTERS_LIST],
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
