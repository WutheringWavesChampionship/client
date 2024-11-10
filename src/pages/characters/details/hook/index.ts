import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useGetCharacterDetails } from '@features/hooks';
import { CharacterType } from '@shared/server/interface';

export const usePage = () => {
  const { t } = useTranslation();
  const { id } = useParams() as { id: string };
  const [data, setData] = useState<CharacterType>();
  const [isLoading, setIsLoading] = useState(false);

  const getCharacterData = useGetCharacterDetails();

  const handleGetData = useCallback(
    (id: string | number) => {
      setIsLoading(true);
      getCharacterData({
        id,
        onSuccess: (val) => {
          setData(val);
        },
        onFinally: () => {
          setIsLoading(false);
        },
        onError: () => {
          toast.error(t('errors.notFoundPage'));
        },
      });
    },
    [getCharacterData, t],
  );

  useEffect(() => {
    handleGetData(id);
  }, [handleGetData, id]);
  return { data, isLoading, t };
};
