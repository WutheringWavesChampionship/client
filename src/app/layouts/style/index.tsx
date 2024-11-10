import { ToastContainer } from 'react-toastify';
import styles from './styles.module.scss';

import '../../styles/index.scss';

interface Props {
  children: React.ReactNode;
}

export const StylesLayout = ({ children }: Props) => {
  return (
    <body className={styles.wrapper}>
      <ToastContainer />
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={'/background/20241018193341.png'}
          alt="background"
        />
      </div>
      <main className={styles.main}>{children}</main>
    </body>
  );
};
