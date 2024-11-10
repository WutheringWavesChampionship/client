import { useCallback } from 'react';
import { BaseFetchProps } from '@entities/interfaces';
import { axiosApi } from '@entities/lib';
import { API_ROUTES, API_ROUTES_ENUM } from '@shared/server/constants/api';
import { UserCharacterType } from '@shared/server/interface';

export const useGetUserCharactersList = () => {
  return useCallback(
    async ({
      onError,
      onSuccess,
      onFinally,
    }: BaseFetchProps<Array<UserCharacterType>>) => {
      try {
        const { data } = await axiosApi.get<Array<UserCharacterType>>(
          API_ROUTES[API_ROUTES_ENUM.MY_CHARACTERS],
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
