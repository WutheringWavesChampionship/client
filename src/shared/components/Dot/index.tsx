import classNames from 'classnames';
import styles from './styles.module.scss';

interface Props {
  className?: string;
  color?: 'green' | 'grey' | 'blue' | 'violet' | 'orange' | 'violet' | 'red';
  size?: number;
}

export const Dot = ({ className, color = 'green', size = 6 }: Props) => {
  return (
    <div
      className={classNames(styles.wrapper, styles[color], className)}
      style={{ width: size, height: size }}
    />
  );
};
