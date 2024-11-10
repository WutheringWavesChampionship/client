import { IMockData } from '../../types/mockData.interface';
import res from './responses/current.json';

export const mockCurrentRequest: IMockData = {
  url: 'https://testapi.ru/request/undefined',
  method: 'GET',
  status: 200,
  response: res,
  disable: false,
  disableUsingOriginal: false,
  ignoreQueryParams: true,
  refreshStoryOnUpdate: true,
};
