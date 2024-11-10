import classNames from 'classnames';
import { Paper } from '../../';
import { PopUpMenuItem, PopUpMenuItemProps } from '../PopUpMenuItem';
import styles from './style.module.scss';

export interface ActionProps extends Omit<PopUpMenuItemProps, 'className'> {
  isDanger?: boolean;
}

interface Props {
  className?: string;
  actions: Array<ActionProps>;
}

export const PopUpMenu = ({ className, actions }: Props) => {
  return (
    <Paper
      padding={6}
      flexDirection="column"
      className={classNames(styles.wrapper, className)}
    >
      {actions.map(({ onClick, text, icon, isDanger }, index) => {
        return (
          <PopUpMenuItem
            key={`PopUpMenuItem-${index}`}
            onClick={onClick}
            className={classNames({ [styles.danger]: isDanger })}
            icon={icon}
            text={text}
          />
        );
      })}
    </Paper>
  );
};
