import { IMockData } from '../../types/mockData.interface';
import res from './responses/list.json';

export const mockEmployeesList: IMockData = {
  url: 'https://testapi.ru/users/staff?page=1&perPage=10',
  method: 'GET',
  status: 200,
  response: res,
  disable: false,
  disableUsingOriginal: false,
  ignoreQueryParams: true,
  refreshStoryOnUpdate: false,
};
