import classNames from 'classnames';
import { MouseEventHandler } from 'react';
import { TextContent } from '../../../TextContent';
import styles from './PopUpMenuItem.module.scss';

export interface PopUpMenuItemProps {
  className?: string;
  onClick: MouseEventHandler;
  icon?: JSX.Element;
  text: string;
}

export const PopUpMenuItem = ({
  className,
  onClick,
  text,
  icon,
}: PopUpMenuItemProps) => {
  return (
    <button className={classNames(styles.wrapper, className)} onClick={onClick}>
      {icon}
      <TextContent fontWeight="regular" variant="p" size={14}>
        {text}
      </TextContent>
    </button>
  );
};
