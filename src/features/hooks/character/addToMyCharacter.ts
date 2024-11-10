import { useCallback } from 'react';
import { BaseFetchProps } from '@entities/interfaces';
import { axiosApi } from '@entities/lib';
import { API_ROUTES, API_ROUTES_ENUM } from '@shared/server/constants/api';
import { UserCharacterType } from '@shared/server/interface';

interface Props extends BaseFetchProps<UserCharacterType> {
  id: string | number;
}

export const useAddToMyCharacters = () => {
  return useCallback(async ({ onError, onSuccess, onFinally, id }: Props) => {
    try {
      const { data } = await axiosApi.post<UserCharacterType>(
        API_ROUTES[API_ROUTES_ENUM.MY_CHARACTERS],
        { characterId: id },
      );
      onSuccess?.(data);
    } catch (error) {
      onError?.(error);
      console.error(error);
    } finally {
      onFinally?.();
    }
  }, []);
};
