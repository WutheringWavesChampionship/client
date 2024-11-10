import classNames from 'classnames';
import { Button, TextContent } from '@shared/components';
import { Character } from '@shared/components/Character';
import { CharacterType } from '@shared/server/interface';
import DataEditor from './Form';
import { useWidget } from './hook';
import styles from './style.module.scss';

interface Props {
  className?: string;
  data: CharacterType;
}

export const CharacterDetails = ({ className, data }: Props) => {
  const { t, userData, handleAddToMy } = useWidget(data);
  return (
    <div className={classNames(styles.wrapper, className)}>
      <TextContent variant="h2" size={32} fontWeight="bold">
        {t(data.name)}
      </TextContent>
      <Character
        className={styles.character}
        name={t(data.name)}
        element={data.element}
        rarity={data.rarity}
        imagePath={data.image ? `${__API__}${data.image}` : undefined}
        size={200}
        hideName
      />
      {!userData && (
        <Button onClick={handleAddToMy}>{t('form.actionAddToMy')}</Button>
      )}
      {userData && <DataEditor userData={userData} />}
    </div>
  );
};
