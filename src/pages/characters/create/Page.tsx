import { useTranslation } from 'react-i18next';
import { PageHeader } from '@widgets/PageHeader';
import { AppRoutes, AppRoutesEnum } from '@entities/constants';
import { PageSkeleton, Paper } from '@shared/components';
import styles from './style.module.scss';

export default () => {
  const { t } = useTranslation();
  return (
    <PageSkeleton className={styles.wrapper}>
      <PageHeader
        breadcrumbs={[
          { title: t('routes.main'), href: AppRoutes[AppRoutesEnum.MAIN]() },
          { title: t('routes.settings') },
        ]}
      />
      <Paper className={styles.card}>{'create'}</Paper>
    </PageSkeleton>
  );
};
