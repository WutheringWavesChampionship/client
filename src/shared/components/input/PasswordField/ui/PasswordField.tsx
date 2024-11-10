'use client';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { TextField } from '../../';
import { IconEyeClose, IconEyeOpen } from '../../../../icons';
import { usePasswordField } from '../hook';

interface Props
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'type'
  > {
  wrapperClassName?: string;
  inputClassName?: string;
  className?: undefined;
  label?: string;
  error?: string | false;
  leftItem?: JSX.Element;
}
export const PasswordField = (props: Props) => {
  const { isShowPassword, toggleIsShowPassword } = usePasswordField();
  return (
    <TextField
      type={isShowPassword ? 'text' : 'password'}
      rightItem={
        <EyeIcon
          isShowPassword={isShowPassword}
          toggleIsShowPassword={toggleIsShowPassword}
          width={20}
          height={20}
        />
      }
      {...props}
    />
  );
};
type EyeIconProps = {
  isShowPassword: boolean;
  toggleIsShowPassword(): void;
  height?: number;
  width?: number;
};
const EyeIcon = ({
  isShowPassword,
  toggleIsShowPassword,
  height,
  width,
}: EyeIconProps) => {
  if (isShowPassword) {
    return (
      <IconEyeOpen
        onClick={toggleIsShowPassword}
        width={width}
        height={height}
      />
    );
  } else {
    return (
      <IconEyeClose
        onClick={toggleIsShowPassword}
        width={width}
        height={height}
      />
    );
  }
};
