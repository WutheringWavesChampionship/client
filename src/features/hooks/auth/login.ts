import { useCallback, useContext } from 'react';
import { UserDataContext } from '@entities/context';
import { BaseFetchProps } from '@entities/interfaces';
import { axiosApi } from '@entities/lib';
import { API_ROUTES, API_ROUTES_ENUM } from '@shared/server/constants/api';
import { LoginUserType } from '@shared/server/interface';

interface Props
  extends BaseFetchProps<{
    token: string;
  }> {
  data: LoginUserType;
}

export const useLogin = () => {
  const { setIsLoading } = useContext(UserDataContext);
  return useCallback(
    async ({ onError, onSuccess, data }: Props) => {
      try {
        setIsLoading(true);
        const res = await axiosApi.post(
          API_ROUTES[API_ROUTES_ENUM.AUTH_LOGIN],
          data,
        );
        if (onSuccess) {
          onSuccess(res.data);
        }
      } catch (error) {
        if (onError) {
          onError(error);
        }
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading],
  );
};
