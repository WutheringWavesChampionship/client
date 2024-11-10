import { IMockData } from '../../types/mockData.interface';
import res from './responses/role.json';

export const mockRoles: IMockData = {
  url: 'https://testapi.ru/role/undefined',
  method: 'GET',
  status: 200,
  response: res,
  disable: false,
  disableUsingOriginal: false,
  ignoreQueryParams: true,
  refreshStoryOnUpdate: true,
};
