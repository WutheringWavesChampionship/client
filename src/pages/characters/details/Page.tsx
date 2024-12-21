import { memo } from 'react';
import { CharacterDetails } from '@widgets/character';
import { PageHeader } from '@widgets/PageHeader';
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
            title: data?.name || t('routes.character'),
          },
        ]}
      />
      <Paper className={styles.card} loading={isLoading}>
        {data && <CharacterDetails data={data} />}
      </Paper>
    </PageSkeleton>
  );
});
