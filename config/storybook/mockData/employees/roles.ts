import { IMockData } from '../../types/mockData.interface';
import res from './responses/roles.json';

export const mockEmployeesRoles: IMockData = {
  url: 'https://testapi.ru/roles',
  method: 'GET',
  status: 200,
  response: res,
  disable: false,
  disableUsingOriginal: false,
  ignoreQueryParams: true,
  refreshStoryOnUpdate: false,
};
