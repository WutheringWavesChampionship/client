import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AppRoutes, AppRoutesEnum } from '@entities/constants';
import { Button, TextContent } from '@shared/components';
import { Icon403 } from './assets/icon';
import styles from './Forbidden.module.scss';

const Page = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <Icon403 />
      <div className={styles.textContent}>
        <TextContent fontWeight="semibold" variant="h2" size={24}>
          {t('forbidden.title')}
        </TextContent>
        <TextContent size={16} fontWeight="regular" className={styles.text}>
          {t('forbidden.text')}
        </TextContent>
      </div>
      <div className={styles.controls}>
        <Button
          className={styles.button}
          size="large"
          variant="white"
          onClick={() => navigate(-1)}
        >
          {t('forbidden.back')}
        </Button>
        <Link to={AppRoutes[AppRoutesEnum.MAIN]()} className={styles.button}>
          <Button className={styles.button} size="large">
            {t('forbidden.toMain')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
