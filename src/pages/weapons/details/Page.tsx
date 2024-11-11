import { memo } from 'react';
import { PageHeader } from '@widgets/PageHeader';
import { WeaponDetails } from '@widgets/weapon';
import { AppRoutes, AppRoutesEnum } from '@entities/constants';
import { PageSkeleton, Paper } from '@shared/components';
import { usePage } from './hook';
import styles from './style.module.scss';

export default memo(() => {
  const { t, data, isLoading } = usePage();

  return (
    <PageSkeleton className={styles.wrapper}>
      <PageHeader
        breadcrumbs={[
          { title: t('routes.main'), href: AppRoutes[AppRoutesEnum.MAIN]() },
          {
            title: t('routes.settings'),
            href: AppRoutes[AppRoutesEnum.SETTINGS](),
          },
          {
            title: t('routes.weapon'),
          },
        ]}
      />
      <Paper className={styles.card} loading={isLoading}>
        {data && <WeaponDetails data={data} />}
      </Paper>
    </PageSkeleton>
  );
});
