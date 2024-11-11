import { useCallback, useContext } from 'react';
import { GlobalContext } from '@entities/context';
import { BaseFetchProps } from '@entities/interfaces';
import { axiosApi } from '@entities/lib';
import { API_ROUTES, API_ROUTES_ENUM } from '@shared/server/constants/api';
import { CharacterType, CreateCharacterType } from '@shared/server/interface';

interface Props extends BaseFetchProps<CharacterType> {
  data: CreateCharacterType;
  id: string | number;
}

export const useUpdateCharacter = () => {
  const { setIsLoading, characters, setCharacters } = useContext(GlobalContext);
  return useCallback(
    async ({ onError, onSuccess, onFinally, data, id }: Props) => {
      try {
        setIsLoading(true);
        const res = await axiosApi.patch<CharacterType>(
          API_ROUTES[API_ROUTES_ENUM.CHARACTERS_CURRENT].replace(
            ':id',
            String(id),
          ),
          data,
        );
        const newCharacters = [...characters];
        const currentIndex = newCharacters.findIndex((el) => el.id === id);
        newCharacters[currentIndex].element = data.element;
        newCharacters[currentIndex].name = data.name;
        newCharacters[currentIndex].rarity = data.rarity;
        newCharacters[currentIndex].weaponType = data.weaponType;
        setCharacters(newCharacters);
        // setUser(res.data);
        onSuccess?.(res.data);
      } catch (error) {
        onError?.(error);
        console.error(error);
      } finally {
        setIsLoading(false);
        onFinally?.();
      }
    },
    [characters, setCharacters, setIsLoading],
  );
};
