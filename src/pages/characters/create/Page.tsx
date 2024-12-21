import { CharacterAdminForm } from '@widgets/character/Details/AdminForm';
import { PageHeader } from '@widgets/PageHeader';
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
            title: t('routes.characters'),
            href: AppRoutes[AppRoutesEnum.SETTINGS](),
          },
          { title: t('routes.settings') },
        ]}
      />
      <Paper className={styles.card}>
        <CharacterAdminForm onSubmit={handleCreate} />
      </Paper>
    </PageSkeleton>
  );
};
