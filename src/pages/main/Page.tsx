import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PageHeader } from '@widgets/PageHeader';
import { AppRoutes, AppRoutesEnum } from '@entities/constants';
import { UserDataContext } from '@entities/context';
import { Button, PageSkeleton, Paper } from '@shared/components';
import styles from './style.module.scss';

export default () => {
  const { t } = useTranslation();
  const { logout } = useContext(UserDataContext);

  return (
    <PageSkeleton className={styles.wrapper}>
      <PageHeader breadcrumbs={[{ title: t('routes.main') }]} />
      <Paper className={styles.card}>
        <Link to={AppRoutes[AppRoutesEnum.SETTINGS]()}>
          <Button>{t('settingsRoute')}</Button>
        </Link>
        <Link to={AppRoutes[AppRoutesEnum.AUTH_LOGIN]()} onClick={logout}>
          <Button>{t('logoutAction')}</Button>
        </Link>
      </Paper>
    </PageSkeleton>
  );
};
