import { useCallback } from 'react';
import { BaseFetchProps } from '@entities/interfaces';
import { axiosApi } from '@entities/lib';
import { API_ROUTES, API_ROUTES_ENUM } from '@shared/server/constants/api';
import { CharacterType } from '@shared/server/interface';

interface Props extends BaseFetchProps<CharacterType> {
  id: string | number;
}

export const useGetCharacterDetails = () => {
  return useCallback(async ({ onError, onSuccess, onFinally, id }: Props) => {
    try {
      const { data } = await axiosApi.get<CharacterType>(
        API_ROUTES[API_ROUTES_ENUM.CHARACTERS_CURRENT].replace(
          ':id',
          String(id),
        ),
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
