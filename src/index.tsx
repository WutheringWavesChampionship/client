import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { StylesLayout } from './app/layouts';
import {
  UserDataProvider,
  ThemeProvider,
  ErrorBoundary,
  GlobalDataProvider,
} from './app/providers';
import './app/lib/i18n';

const container = document.getElementById('root');

if (!container) {
  throw new Error(
    'Root container not found. Failed to mount the react application',
  );
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <GlobalDataProvider>
          <UserDataProvider>
            <StylesLayout>
              <ThemeProvider>
                <App />
              </ThemeProvider>
            </StylesLayout>
          </UserDataProvider>
        </GlobalDataProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>,
);
