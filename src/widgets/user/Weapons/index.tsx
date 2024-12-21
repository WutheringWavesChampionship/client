import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoutes, AppRoutesEnum } from '@entities/constants';
import { Button, Weapon } from '@shared/components';
import { IconPlus } from '@shared/icons';
import { useWidget } from './hook';
import styles from './style.module.scss';

interface Props {
  className?: string;
}

export const UserWeapons = ({ className }: Props) => {
  const { data, isAdmin } = useWidget();
  return (
    <div className={classNames(styles.wrapper, className)}>
      {data.map((el) => (
        <Link
          key={`character-${el.id}`}
          to={AppRoutes[AppRoutesEnum.WEAPON_DETAILS](el.id)}
          className={styles.link}
        >
          <Weapon
            className={styles.character}
            additionalInfo={
              el.userData
                ? {
                    constants: el.userData.constants,
                    level: el.userData.level,
                  }
                : undefined
            }
            baseAttack={el.baseAttack}
            mainStat={el.mainStat}
            statValue={el.statValue}
            rarity={el.rarity}
            weaponType={el.type}
            imagePath={el.image ? `${__API__}${el.image}` : undefined}
            name={el.name}
          />
        </Link>
      ))}
      {isAdmin && (
        <Link to={AppRoutes[AppRoutesEnum.WEAPON_CREATE]()}>
          <Button variant="outline" className={styles.add}>
            <IconPlus />
          </Button>
        </Link>
      )}
    </div>
  );
};
