import { IMockData } from '../../types/mockData.interface';
import res from './responses/request_processors.json';

export const mockRequestsProcessorsList: IMockData = {
  url: 'https://testapi.ru/request_processors',
  method: 'GET',
  status: 200,
  response: res,
  disable: false,
  disableUsingOriginal: false,
  ignoreQueryParams: true,
  refreshStoryOnUpdate: true,
};
