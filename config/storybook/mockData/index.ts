import { IMockData } from '../types/mockData.interface';
import {
  mockEmployeesList,
  mockEmployeesRoles,
  mockEmployeesDepartments,
  mockEmployeeInfo,
} from './employees';
import { mockImagesUpload } from './images';
import { mockRequestsList, mockRequestsProcessorsList } from './requests';
import { mockCurrentRequest } from './requests/current';
import { accessCodesList, mockRoles, mockRolesList } from './roles';

export const globalMockData: IMockData[] = [
  accessCodesList,
  mockImagesUpload,
  mockRolesList,
  mockRoles,
  mockEmployeesList,
  mockEmployeesRoles,
  mockEmployeesDepartments,
  mockEmployeeInfo,
  mockRequestsList,
  mockRequestsProcessorsList,
  mockCurrentRequest,
];
