'use client';
import { type ReactNode } from 'react';
import { UserDataContext } from '@entities/context';
import { useProvider } from './hook';

interface Props {
  children: ReactNode;
}

export const UserDataProvider = ({ children }: Props) => {
  const { value } = useProvider();
  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};
