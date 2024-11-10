import classNames from 'classnames';
import { ReactNode } from 'react';
import { Loader } from '../Loader';
import styles from './styles.module.scss';

interface Props {
  className?: string;
  children?:
    | JSX.Element
    | Array<JSX.Element | string | undefined>
    | string
    | false
    | ReactNode;
  padding?: number;
  radius?: number;
  flexDirection?:
    | 'column'
    | 'column-reverse'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'row'
    | 'row-reverse';
  gap?: number;
  loading?: boolean;
  loaderSize?: number;
  zIndex?: number;
}

export const Paper = ({
  className,
  children,
  padding,
  radius,
  flexDirection,
  gap,
  loading,
  loaderSize = 64,
  zIndex,
}: Props) => {
  return (
    <main
      style={{ padding, borderRadius: radius, flexDirection, gap, zIndex }}
      className={classNames(
        styles.wrapper,
        { [styles.loading]: loading },
        className,
      )}
    >
      <div
        className={classNames(styles.loader, { [styles.show]: loading })}
        style={{ borderRadius: radius }}
      >
        <Loader size={loaderSize} />
      </div>
      {children}
    </main>
  );
};
