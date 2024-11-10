import { IMockData } from '../../types/mockData.interface';
import res from './responses/full.json';

export const mockEmployeeInfo: IMockData = {
  url: 'https://testapi.ru/user/undefined/full',
  method: 'GET',
  status: 200,
  response: res,
  disable: false,
  disableUsingOriginal: false,
  ignoreQueryParams: true,
  refreshStoryOnUpdate: false,
};
