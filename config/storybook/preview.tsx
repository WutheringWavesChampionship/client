import {
  ThemeDecorator,
  RouterDecorator,
  SuspenseDecorator,
  UserDecorator,
} from '../../src/app/config';
import i18n from './i18next';
import { globalMockData } from './mockData';

const customViewports = {
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1440px',
      height: '812px',
    },
  },
  mobile: {
    name: 'Mobile',
    styles: {
      width: '320px',
      height: '812px',
    },
  },
};

const preview = {
  initialGlobals: {
    locale: 'ru',
    locales: {
      en: 'English',
      ru: 'Russian',
    },
  },
  parameters: {
    i18n,
    layout: 'fullscreen',
    mockAddonConfigs: {
      globalMockData,
    },
    viewport: {
      viewports: customViewports,
      defaultViewport: 'desktop',
    },
  },
  decorators: [
    ThemeDecorator,
    RouterDecorator,
    SuspenseDecorator,
    UserDecorator,
  ],
};

export default preview;
