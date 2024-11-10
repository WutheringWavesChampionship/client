import classNames from 'classnames';
import { DetailedHTMLProps } from 'react';
import { ButtonHTMLAttributes } from 'react';
import styles from './style.module.scss';

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  width?: number | string;
}

export const HeaderItem = ({ className, width, style, ...props }: Props) => {
  return (
    <button
      className={classNames(styles.wrapper, className)}
      style={{ width: width, ...style }}
      {...props}
    />
  );
};
