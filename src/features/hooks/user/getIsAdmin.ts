import { useCallback } from 'react';
import { BaseFetchProps } from '@entities/interfaces';
import { axiosApi } from '@entities/lib';
import { API_ROUTES, API_ROUTES_ENUM } from '@shared/server/constants/api';

export const useGetIsAdmin = () => {
  return useCallback(
    async ({ onError, onSuccess, onFinally }: BaseFetchProps<boolean>) => {
      try {
        const { data } = await axiosApi.get<boolean>(
          API_ROUTES[API_ROUTES_ENUM.ME_IS_ADMIN],
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
