import classNames from 'classnames';
import { Button, Divider } from '@shared/components';
import { Character } from '@shared/components/Character';
import { CharacterType } from '@shared/server/interface';
import { CharacterAdminForm } from './AdminForm';
import DataEditor from './DataEditor';
import { useWidget } from './hook';
import styles from './style.module.scss';

interface Props {
  className?: string;
  data: CharacterType;
}

export const CharacterDetails = ({ className, data }: Props) => {
  const {
    t,
    userData,
    handleAddToMy,
    isAdmin,
    getInputProps,
    open,
    updateCharacter,
  } = useWidget(data);
  return (
    <div className={classNames(styles.wrapper, className)}>
      <input {...getInputProps()} />
      <div className={styles.info}>
        <div className={styles.avatar}>
          <Character
            className={styles.character}
            name={data.name}
            element={data.element}
            rarity={data.rarity}
            imagePath={data.image ? `${__API__}${data.image}` : undefined}
            size={200}
          />
          {isAdmin && (
            <Button type="button" onClick={open}>
              {t('actionChangeImage')}
            </Button>
          )}
        </div>
        {isAdmin && (
          <CharacterAdminForm initialValues={data} onSubmit={updateCharacter} />
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
