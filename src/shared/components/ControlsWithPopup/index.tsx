'use client';
import classNames from 'classnames';
import { useMemo } from 'react';
import { IconDottedLine } from '../../icons';
import { useControls } from './hook';
import { ActionProps, PopUpMenu } from './PopUpMenu';
import styles from './style.module.scss';

interface Props {
  className?: string;
  rotateIcon?: boolean;
  actions: Array<ActionProps>;
  isBottom?: boolean;
  withTableMargin?: boolean;
}

export const ControlsWithPopup = ({
  className,
  rotateIcon,
  actions,
  isBottom,
  withTableMargin,
}: Props) => {
  const { isShow, setIsShow, wrapperRef } = useControls();

  const position = useMemo(() => {
    return isBottom ? 'bottom' : 'top';
  }, [isBottom]);
  return (
    <div
      className={classNames(
        styles.wrapper,
        {
          [styles.active]: isShow,
          [styles.table]: withTableMargin,
          [styles.disabled]: !actions.length,
        },
        className,
      )}
      onClick={() => {
        setIsShow((val) => !val);
      }}
      ref={wrapperRef}
    >
      <IconDottedLine rotate={rotateIcon ? 90 : 0} width={20} height={20} />
      {isShow && !!actions.length && (
        <PopUpMenu
          className={classNames(styles.popup, styles[position])}
          actions={actions}
        />
      )}
    </div>
  );
};
