import { IMockData } from '../../types/mockData.interface';
import res from './responses/createImage.json';

export const mockImagesUpload: IMockData = {
  url: 'https://testapi.ru/upload',
  method: 'POST',
  status: 200,
  response: res,
  disable: false,
  disableUsingOriginal: false,
  ignoreQueryParams: true,
  refreshStoryOnUpdate: true,
};
