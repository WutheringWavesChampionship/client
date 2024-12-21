import { PageHeader } from '@widgets/PageHeader';
import { WeaponAdminForm } from '@widgets/weapon/Details/AdminForm';
import { AppRoutes, AppRoutesEnum } from '@entities/constants';
import { PageSkeleton, Paper } from '@shared/components';
import { usePage } from './hook';
import styles from './style.module.scss';

export default () => {
  const { t, handleCreate } = usePage();
  return (
    <PageSkeleton className={styles.wrapper}>
      <PageHeader
        breadcrumbs={[
          { title: t('routes.main'), href: AppRoutes[AppRoutesEnum.MAIN]() },
          {
            title: t('routes.weapons'),
            href: AppRoutes[AppRoutesEnum.SETTINGS](),
          },
          { title: t('routes.creation') },
        ]}
      />
      <Paper className={styles.card}>
        <WeaponAdminForm onSubmit={handleCreate} />
      </Paper>
    </PageSkeleton>
  );
};
