'use client';
import { GroupBase } from 'react-select';
import Creatable, { CreatableProps } from 'react-select/creatable';
import { ErrorAndLabelSkeleton, ISelectOption } from '../../';
import styles from './style.module.scss';

interface Props<
  IsMulti extends boolean,
  Group extends GroupBase<ISelectOption> = GroupBase<ISelectOption>,
> extends CreatableProps<ISelectOption, IsMulti, Group> {
  label?: string;
  error?: string;
  className?: string;
  wrapperClassName?: string;
  isMulti: IsMulti;
}

export function StyledCreatableSelect<
  IsMulti extends boolean = false,
  Group extends GroupBase<ISelectOption> = GroupBase<ISelectOption>,
>({
  label,
  inputId = 'select-input',
  error,
  isClearable = true,
  wrapperClassName,
  ...props
}: Props<IsMulti, Group>) {
  return (
    <ErrorAndLabelSkeleton
      error={error}
      label={label}
      wrapperClassName={wrapperClassName}
      borderClassName={styles.borderClassName}
    >
      <Creatable
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
        {...props}
      />
    </ErrorAndLabelSkeleton>
  );
}
