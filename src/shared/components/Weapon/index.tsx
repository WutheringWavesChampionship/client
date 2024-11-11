import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import {
  RarityEnum,
  StatTypeEnum,
  WeaponTypeEnum,
} from '../../server/constants';
import { UserWeaponType } from '../../server/interface';
import { TextContent } from '../TextContent';
import styles from './style.module.scss';

interface Props {
  className?: string;
  name: string;
  imagePath?: string;
  weaponType: WeaponTypeEnum;
  rarity: RarityEnum;
  additionalInfo?: Partial<UserWeaponType>;
  size?: number;
  hideName?: boolean;
  mainStat?: StatTypeEnum;
  statValue?: number;
  baseAttack?: number;
}

export const Weapon = ({
  className,
  weaponType,
  imagePath,
  additionalInfo,
  size = 80,
  rarity,
  hideName = false,
  baseAttack,
  mainStat,
  statValue,
  name,
}: Props) => {
  const { t } = useTranslation('stats');
  const { t: weapons } = useTranslation('weapons');
  return (
    <div
      className={classNames(styles.wrapper, className)}
      style={{ width: size }}
      title={
        baseAttack || (mainStat && statValue)
          ? `${baseAttack ? `${t('attack')}: ${baseAttack}\n` : ''}${mainStat && statValue ? `${t(mainStat)}: ${statValue}%\n` : ''}${weapons(`${name}.description`)}`
          : undefined
      }
    >
      <div className={classNames(styles.imageWrapper, styles[weaponType])}>
        <img
          src={imagePath}
          alt={weapons(`${name}.name`)}
          className={classNames(styles.image, styles[rarity])}
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
            {weapons(`${name}.name`)}
          </TextContent>
        )}
      </div>
    </div>
  );
};
