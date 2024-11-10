import { IMockData } from '../../types/mockData.interface';
import res from './responses/departments.json';

export const mockEmployeesDepartments: IMockData = {
  url: 'https://testapi.ru/departments',
  method: 'GET',
  status: 200,
  response: res,
  disable: false,
  disableUsingOriginal: false,
  ignoreQueryParams: true,
  refreshStoryOnUpdate: false,
};
