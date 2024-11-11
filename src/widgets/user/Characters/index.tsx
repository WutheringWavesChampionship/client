import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoutes, AppRoutesEnum } from '@entities/constants';
import { Button } from '@shared/components';
import { Character } from '@shared/components/Character';
import { IconPlus } from '@shared/icons';
import { useWidget } from './hook';
import styles from './style.module.scss';

interface Props {
  className?: string;
}

export const UserCharacters = ({ className }: Props) => {
  const { data, isAdmin } = useWidget();
  return (
    <div className={classNames(styles.wrapper, className)}>
      {data.map((el) => (
        <Link
          key={`character-${el.id}`}
          to={AppRoutes[AppRoutesEnum.CHARACTER_DETAILS](el.id)}
          className={styles.link}
        >
          <Character
            className={styles.character}
            additionalInfo={
              el.userData
                ? {
                    constants: el.userData.constants,
                    level: el.userData.level,
                    critValue: el.userData.critValue || 0,
                  }
                : undefined
            }
            rarity={el.rarity}
            element={el.element}
            imagePath={el.image ? `${__API__}${el.image}` : undefined}
            name={el.name}
          />
        </Link>
      ))}
      {isAdmin && (
        <Link to={AppRoutes[AppRoutesEnum.CHARACTER_CREATE]()}>
          <Button variant="outline" className={styles.add}>
            <IconPlus />
          </Button>
        </Link>
      )}
    </div>
  );
};
