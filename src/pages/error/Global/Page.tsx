import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AppRoutes, AppRoutesEnum } from '@entities/constants';
import { Button, TextContent } from '@shared/components';
import { IconErrorGlobal } from './assets/icon';
import styles from './style.module.scss';

const Page = () => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={styles.wrapper}>
      <IconErrorGlobal />
      <div className={styles.textContent}>
        <TextContent fontWeight="semibold" variant="h2" size={24}>
          {t('globalError.title')}
        </TextContent>
        <TextContent size={16} fontWeight="regular" className={styles.text}>
          {t('globalError.text')}
        </TextContent>
      </div>
      <div className={styles.controls}>
        <Button
          className={styles.button}
          size="large"
          variant="white"
          onClick={reloadPage}
        >
          {t('globalError.reload')}
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
