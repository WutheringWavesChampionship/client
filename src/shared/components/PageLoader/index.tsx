import classNames from 'classnames';
import { Loader } from '../Loader';
import styles from './styles.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(styles.PageLoader, className)}>
    <Loader size={64} />
  </div>
);
