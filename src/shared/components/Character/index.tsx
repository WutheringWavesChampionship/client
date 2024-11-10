import classNames from 'classnames';
import { ElementEnum, RarityEnum } from '../../server/constants';
import { UserCharacterType } from '../../server/interface';
import { TextContent } from '../TextContent';
import styles from './style.module.scss';

interface Props {
  className?: string;
  name: string;
  imagePath?: string;
  element: ElementEnum;
  rarity: RarityEnum;
  additionalInfo?: Partial<UserCharacterType>;
  size?: number;
  hideName?: boolean;
}

export const Character = ({
  className,
  element,
  imagePath,
  name,
  additionalInfo,
  size = 80,
  rarity,
  hideName = false,
}: Props) => {
  return (
    <div
      className={classNames(styles.wrapper, className)}
      style={{ width: size }}
    >
      <div className={classNames(styles.imageWrapper, styles[rarity])}>
        <img
          src={imagePath}
          alt={name}
          className={classNames(styles.image, styles[element])}
        />
      </div>
      <div className={styles.info}>
        {additionalInfo && (
          <div className={styles.additionalInfo}>
            <TextContent size={12} fontWeight="semibold">
              {additionalInfo.level}
            </TextContent>
            {!!additionalInfo.constants && (
              <TextContent size={12} fontWeight="semibold">
                {additionalInfo.constants}
              </TextContent>
            )}
          </div>
        )}
        {!hideName && (
          <TextContent size={16} fontWeight="medium" className={styles.name}>
            {name}
          </TextContent>
        )}
      </div>
    </div>
  );
};
