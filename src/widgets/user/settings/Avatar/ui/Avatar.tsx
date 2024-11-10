import classNames from 'classnames';
import { Button, TextContent, UserAvatar } from '@shared/components';
import { useAvatar } from '../hook';
import styles from './Avatar.module.scss';

interface Props {
  className?: string;
}

export const Avatar = ({ className }: Props) => {
  const { t, user, getInputProps, open } = useAvatar();
  if (!user) {
    return <></>;
  }
  return (
    <div className={classNames(styles.wrapper, className)}>
      <input {...getInputProps()} />
      <UserAvatar
        image={user.image ? `${__API__}${user.image}` : undefined}
        className={styles.image}
      />
      <div className={styles.controls}>
        <TextContent size={18} fontWeight="medium">
          {t('blocks.titles.profile_photo')}
        </TextContent>
        <div className={styles.buttons}>
          <Button onClick={open} variant="outline">
            {t('blocks.btns.edit')}
          </Button>
        </div>
      </div>
    </div>
  );
};
