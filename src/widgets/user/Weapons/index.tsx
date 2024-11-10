import classNames from 'classnames';
import styles from './style.module.scss';

interface Props {
  className?: string;
}

export const UserWeapons = ({ className }: Props) => {
  return (
    <div className={classNames(styles.wrapper, className)}>{'weapon'}</div>
  );
};
