import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AppRoutes, AppRoutesEnum } from '@entities/constants';
import { Button, TextContent, PageSkeleton, Paper } from '@shared/components';
import { Icon404 } from './assets/icon';
import styles from './NotFound.module.scss';

const NotFoundPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <PageSkeleton className={styles.wrapper}>
      <Icon404 />
      <Paper flexDirection="column" padding={32}>
        <div className={styles.textContent}>
          <TextContent fontWeight="semibold" variant="h2" size={24}>
            {t('not_found.title')}
          </TextContent>
          <TextContent size={16} fontWeight="regular" className={styles.text}>
            {t('not_found.text')}
          </TextContent>
        </div>
        <div className={styles.controls}>
          <Button
            className={styles.button}
            size="large"
            variant="white"
            onClick={() => navigate(-1)}
          >
            {t('not_found.back')}
          </Button>
          <Link to={AppRoutes[AppRoutesEnum.MAIN]()} className={styles.button}>
            <Button className={styles.button} size="large">
              {t('not_found.toMain')}
            </Button>
          </Link>
        </div>
      </Paper>
    </PageSkeleton>
  );
};

export default NotFoundPage;
