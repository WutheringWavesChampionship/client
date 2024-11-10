import classNames from 'classnames';
import styles from './styles.module.scss';

interface Props {
  className?: string;
  children?:
    | JSX.Element
    | string
    | Array<JSX.Element | string | undefined | null | JSX.Element[] | false>;
}

export const PageSkeleton = ({ className, children }: Props) => {
  return (
    <div className={classNames(styles.wrapper, className)}>{children}</div>
  );
};
