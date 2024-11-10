import { useCallback, useContext } from 'react';
import { UserDataContext } from '@entities/context';
import { BaseFetchProps } from '@entities/interfaces';
import { axiosApi } from '@entities/lib';
import { API_ROUTES, API_ROUTES_ENUM } from '@shared/server/constants/api';
import { UserType } from '@shared/server/interface';

interface Props extends BaseFetchProps<UserType> {
  data: File;
}

export const useUpdateMyAvatar = () => {
  const { setIsLoading, setUser } = useContext(UserDataContext);
  return useCallback(
    async ({ onError, onSuccess, onFinally, data }: Props) => {
      try {
        setIsLoading(true);
        const formData = new FormData();
        formData.append('file', data);
        const res = await axiosApi.post<UserType>(
          API_ROUTES[API_ROUTES_ENUM.MY_IMAGE],
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        );
        setUser(res.data);
        onSuccess?.(res.data);
      } catch (error) {
        onError?.(error);
        console.error(error);
      } finally {
        setIsLoading(false);
        onFinally?.();
      }
    },
    [setIsLoading, setUser],
  );
};
