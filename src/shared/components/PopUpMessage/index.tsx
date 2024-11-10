import classNames from 'classnames';
import { TextContent } from '../TextContent';
import styles from './style.module.scss';

interface Props {
  className?: string;
  message: string;
}

export const PopUpMessage = ({ className, message }: Props) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <TextContent size={12} fontWeight={'medium'} className={styles.text}>
        {message}
      </TextContent>
    </div>
  );
};
