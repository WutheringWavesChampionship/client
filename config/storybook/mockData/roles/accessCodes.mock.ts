import { IMockData } from '../../types/mockData.interface';
import res from './responses/accessCodes.json';

export const accessCodesList: IMockData = {
  url: 'https://testapi.ru/access_codes',
  method: 'GET',
  status: 200,
  response: res,
  disable: false,
  disableUsingOriginal: false,
  ignoreQueryParams: true,
  refreshStoryOnUpdate: true,
};
