import { RegistrationWidget } from '@widgets/auth';
import { Paper } from '@shared/components';
import styles from './style.module.scss';

export default () => {
  return (
    <Paper className={styles.wrapper}>
      <RegistrationWidget />
    </Paper>
  );
};
