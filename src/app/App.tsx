import classNames from 'classnames';
import { memo, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { useTheme } from '@features/hooks';
import { AppRouter } from './providers';

export default memo(() => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', theme)} id="app">
      <ToastContainer />
      <Suspense fallback="">
        <AppRouter />
      </Suspense>
    </div>
  );
});
