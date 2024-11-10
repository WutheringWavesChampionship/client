import classNames from 'classnames';
import { IconHuman } from '../../icons';
import styles from './styles.module.scss';

interface Props {
  className?: string;
  image?: string;
  onClick?(): void;
}

export const UserAvatar = ({ className, image, onClick }: Props) => {
  return image ? (
    <div
      className={classNames(
        styles.wrapper,
        { [styles.active]: !!onClick },
        className,
      )}
      style={{ backgroundImage: 'url(' + image + ')' }}
      onClick={onClick}
    />
  ) : (
    <div
      className={classNames(
        styles.wrapper,
        { [styles.active]: !!onClick },
        className,
      )}
      onClick={onClick}
    >
      <IconHuman width={20} height={20} />
    </div>
  );
};
