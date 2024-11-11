import { useCallback } from 'react';
import { BaseFetchProps } from '@entities/interfaces';
import { axiosApi } from '@entities/lib';
import { API_ROUTES, API_ROUTES_ENUM } from '@shared/server/constants/api';

interface Props extends BaseFetchProps<number> {
  data: File;
  id: number | string;
}

export const useUpdateCharacterImage = () => {
  return useCallback(
    async ({ onError, onSuccess, onFinally, data, id }: Props) => {
      try {
        const formData = new FormData();
        formData.append('file', data);
        const res = await axiosApi.post<number>(
          API_ROUTES[API_ROUTES_ENUM.CHARACTERS_CURRENT_IMAGE].replace(
            ':id',
            String(id),
          ),
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        );
        onSuccess?.(res.data);
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
