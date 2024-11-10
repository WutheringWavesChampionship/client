import classNames from 'classnames';
import styles from './styles.module.scss';

export type BadgeColors =
  | 'green'
  | 'grey'
  | 'blue'
  | 'orange'
  | 'violet'
  | 'red';

interface Props {
  className?: string;
  children?:
    | JSX.Element
    | string
    | Array<JSX.Element | string | false | undefined>;
  color?: BadgeColors;
}

export const Badge = ({ className, children, color = 'green' }: Props) => {
  return (
    <div className={classNames(styles.wrapper, styles[color], className)}>
      {children}
    </div>
  );
};
