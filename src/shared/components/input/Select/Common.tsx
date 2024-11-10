'use client';
import Select from 'react-select';
import { Props as SelectProps } from 'react-select';
import { ErrorAndLabelSkeleton } from '../../';
import styles from './style.module.scss';

export interface ISelectOption {
  value: number | string;
  label: string;
}

interface MultiProps extends Omit<SelectProps, 'onChange'> {
  label?: string;
  error?: string;
  className?: string;
  wrapperClassName?: string;
  isMulti: true;
  onChange?: (val: Array<ISelectOption>) => void;
}

interface SingleProps extends Omit<SelectProps, 'onChange'> {
  label?: string;
  error?: string;
  className?: string;
  wrapperClassName?: string;
  isMulti?: false;
  onChange?: (val: ISelectOption) => void;
}

export const StyledSelect = ({
  label,
  inputId = 'select-input',
  error,
  isClearable = true,
  wrapperClassName,
  onChange,
  ...props
}: MultiProps | SingleProps) => {
  return (
    <ErrorAndLabelSkeleton
      error={error}
      label={label}
      wrapperClassName={wrapperClassName}
      borderClassName={styles.borderClassName}
    >
      <Select
        classNames={{
          container: () => {
            return styles.container;
          },
          control: (state) => {
            if (state.isFocused) {
              return styles.controlFocused;
            }
            return styles.control;
          },
          option: (state) => {
            if (state.isSelected) {
              return styles.optionSelected;
            }
            if (state.isFocused) {
              return styles.optionFocused;
            }
            return styles.option;
          },
          menu: () => styles.menu,
          input: () => styles.input,
          multiValue: () => styles.multiValue,
          singleValue: () => styles.singleValue,
          multiValueRemove: () => styles.multiValueRemove,
          clearIndicator: () => styles.multiValueRemove,
        }}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            color: error ? 'var(--red-100) !important' : 'inherit',
            borderColor: error ? 'var(--red-100) !important' : 'inherit',
          }),
        }}
        aria-labelledby={props['aria-labelledby']}
        inputId={inputId}
        isClearable={isClearable}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={onChange ? (val) => onChange(val as any) : undefined}
        {...props}
      />
    </ErrorAndLabelSkeleton>
  );
};
