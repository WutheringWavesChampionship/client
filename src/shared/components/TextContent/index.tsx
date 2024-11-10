import classNames from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  size?: 32 | 26 | 24 | 20 | 18 | 16 | 15 | 14 | 13 | 12;
  fontWeight?: 'bold' | 'normal' | 'semibold' | 'medium' | 'regular';
  textAlign?: 'start' | 'center' | 'end';
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'placeholder'
    | 'disabled'
    | 'error';
  noWrap?: boolean;
}

export const TextContent = ({
  className,
  variant = 'p',
  fontWeight = 'normal',
  size = 14,
  color = 'primary',
  noWrap,
  textAlign = 'start',
  ...props
}: Props) => {
  const elementClassName = classNames(
    styles.wrapper,
    styles[fontWeight],
    styles[color],
    styles[`size${size}`],
    styles[textAlign],
    { [styles.noWrap]: noWrap },
    className,
  );

  switch (variant) {
    case 'h1':
      return <h1 className={elementClassName} {...props} />;
    case 'h2':
      return <h2 className={elementClassName} {...props} />;
    case 'h3':
      return <h3 className={elementClassName} {...props} />;
    case 'h4':
      return <h4 className={elementClassName} {...props} />;

    default:
      return <p className={elementClassName} {...props} />;
  }
};
