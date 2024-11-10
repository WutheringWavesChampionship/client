import { IMockData } from '../../types/mockData.interface';
import res from './responses/list.json';

export const mockRequestsList: IMockData = {
  url: 'https://testapi.ru/requests?page=1&perPage=10',
  method: 'GET',
  status: 200,
  response: res,
  disable: false,
  disableUsingOriginal: false,
  ignoreQueryParams: true,
  refreshStoryOnUpdate: true,
};
