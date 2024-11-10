import { IMockData } from '../../types/mockData.interface';
import res from './responses/rolesList.json';

export const mockRolesList: IMockData = {
  url: 'https://testapi.ru/roles?page=1&perPage=10',
  method: 'GET',
  status: 200,
  response: res,
  disable: false,
  disableUsingOriginal: false,
  ignoreQueryParams: true,
  refreshStoryOnUpdate: true,
};
