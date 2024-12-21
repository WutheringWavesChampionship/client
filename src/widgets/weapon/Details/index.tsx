import classNames from 'classnames';
import { Button, Divider, Weapon } from '@shared/components';
import { WeaponType } from '@shared/server/interface';
import { WeaponAdminForm } from './AdminForm';
import DataEditor from './DataEditor';
import { useWidget } from './hook';
import styles from './style.module.scss';

interface Props {
  className?: string;
  data: WeaponType;
}

export const WeaponDetails = ({ className, data }: Props) => {
  const {
    t,
    userData,
    handleAddToMy,
    isAdmin,
    getInputProps,
    open,
    updateWeapon,
  } = useWidget(data);
  return (
    <div className={classNames(styles.wrapper, className)}>
      <input {...getInputProps()} />
      <div className={styles.info}>
        <div className={styles.avatar}>
          <Weapon
            size={200}
            // hideName
            className={styles.character}
            mainStat={data.mainStat}
            rarity={data.rarity}
            weaponType={data.type}
            imagePath={data.image ? `${__API__}${data.image}` : undefined}
            name={data.name}
          />
          {isAdmin && (
            <Button type="button" onClick={open}>
              {t('actionChangeImage')}
            </Button>
          )}
        </div>
        {isAdmin && (
          <WeaponAdminForm initialValues={data} onSubmit={updateWeapon} />
        )}
      </div>
      <Divider />
      {!userData && (
        <Button onClick={handleAddToMy}>{t('actionAddToMy')}</Button>
      )}
      {userData && <DataEditor userData={userData} />}
    </div>
  );
};
