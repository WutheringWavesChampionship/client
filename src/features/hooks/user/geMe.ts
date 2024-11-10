import { useCallback } from 'react';
import { BaseFetchProps } from '@entities/interfaces';
import { axiosApi } from '@entities/lib';
import { API_ROUTES, API_ROUTES_ENUM } from '@shared/server/constants/api';
import { UserType } from '@shared/server/interface';

export const useGetMyData = () => {
  return useCallback(
    async ({ onError, onSuccess, onFinally }: BaseFetchProps<UserType>) => {
      try {
        const { data } = await axiosApi.get<UserType>(
          API_ROUTES[API_ROUTES_ENUM.ME],
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
