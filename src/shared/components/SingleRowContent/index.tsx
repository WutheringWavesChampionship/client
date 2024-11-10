import classNames from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { TextContent } from '../';
import styles from './style.module.scss';

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

export const SingleRowContent = ({ className, ...props }: Props) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <TextContent
        {...props}
        noWrap
        size={14}
        fontWeight="regular"
        color="primary"
      />
    </div>
  );
};
