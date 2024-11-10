import { useTranslation } from 'react-i18next';
import { PageHeader } from '@widgets/PageHeader';
import { UserSettings, UserCharacters, UserWeapons } from '@widgets/user';
import { AppRoutes, AppRoutesEnum } from '@entities/constants';
import { PageSkeleton, Paper, Tab } from '@shared/components';
import styles from './style.module.scss';

export default () => {
  const { t } = useTranslation();
  const labels = [
    t('routes.characters'),
    t('routes.weapons'),
    t('routes.settings'),
  ];
  const tabs = [<UserCharacters />, <UserWeapons />, <UserSettings />];

  return (
    <PageSkeleton className={styles.wrapper}>
      <PageHeader
        breadcrumbs={[
          { title: t('routes.main'), href: AppRoutes[AppRoutesEnum.MAIN]() },
          { title: t('routes.settings') },
        ]}
      />
      <Paper className={styles.card}>
        <Tab labels={labels} tabs={tabs} />
      </Paper>
    </PageSkeleton>
  );
};
