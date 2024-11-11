import { useContext, useMemo } from 'react';
import { GlobalContext, UserDataContext } from '@entities/context';

export const useWidget = () => {
  const { weapons } = useContext(GlobalContext);
  const { weapons: userWeapons, isAdmin } = useContext(UserDataContext);

  const data = useMemo(() => {
    return weapons.map((character) => {
      const userData = userWeapons.find((el) => el.weapon.id === character.id);
      return { ...character, userData };
    });
  }, [weapons, userWeapons]);

  return { data, isAdmin };
};
