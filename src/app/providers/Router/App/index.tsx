import { memo, Suspense, useCallback, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalContext } from '@entities/context';
import { AppRoutesProps } from '@entities/interfaces';
import { PageLoader } from '@shared/components';
import { routeConfig } from '../../../config';
import { RequireAuth } from '../RequireAuth';

export const AppRouter = memo(() => {
  const { isLoading } = useContext(GlobalContext);
  const renderWithWrapper = useCallback(
    (route: AppRoutesProps) => {
      if (isLoading) {
        return (
          <Route key={route.path} path={route.path} element={<PageLoader />} />
        );
      }
      const element = (
        <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
      );

      return (
        <Route
          key={route.path}
          path={route.path}
          element={
            route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
          }
        />
      );
    },
    [isLoading],
  );

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});
