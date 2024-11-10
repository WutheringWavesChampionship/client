'use client';
import classNames from 'classnames';
import { ReactNode, useState } from 'react';
import { PopUpMessage, TextContent } from '../';
import { IconArrow, IconInfo } from '../../icons';
import styles from './style.module.scss';

interface Props {
  className?: string;
  title: string;
  info?: string;
  children: ReactNode;
  isCollapsible?: boolean;
  initialIsCollapse?: boolean;
  forceShow?: boolean;
}

export const CollapsibleContent = ({
  className,
  title,
  children,
  isCollapsible,
  info,
  initialIsCollapse = false,
  forceShow = false,
}: Props) => {
  const [isCollapse, setIsCollapse] = useState(initialIsCollapse);
  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.header}>
        <div className={styles.title}>
          <TextContent size={18} variant="h4" fontWeight="semibold">
            {title}
          </TextContent>
          {info && (
            <div className={styles.info}>
              <IconInfo width={16} height={16} />
              <PopUpMessage message={info} className={styles.message} />
            </div>
          )}
        </div>
        {isCollapsible && (
          <IconArrow
            width={24}
            height={24}
            onClick={() => setIsCollapse((val) => !val)}
            rotate={isCollapse ? 0 : 180}
            className={styles.active}
          />
        )}
      </div>
      <div
        className={classNames(styles.content, {
          [styles.collapse]: !forceShow && isCollapse,
        })}
      >
        {children}
      </div>
    </div>
  );
};
