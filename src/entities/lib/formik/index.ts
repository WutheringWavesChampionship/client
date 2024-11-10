'use client';
import { useFormik } from 'formik';
import type { FormikConfig, FormikErrors, FormikValues } from 'formik';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';

interface FormikProps<T> extends FormikConfig<T> {
  schema: z.ZodTypeAny;
}

export type ISetFieldValue<T> = (
  field: keyof T,
  value: T[keyof T],
  shouldValidate?: boolean | undefined,
) => Promise<void> | Promise<FormikErrors<T>>;

export type IValidateField<T> = (
  name: keyof T,
) => Promise<void> | Promise<string | undefined>;

export type ISetFieldTouched<T> = (
  field: keyof T,
  touched?: boolean,
  shouldValidate?: boolean,
) => Promise<void> | Promise<FormikErrors<T>>;

export type TouchedErrors<T> = Partial<Record<keyof T, string>>;

export type ISetFieldErrors<T> = (field: keyof T, value: string) => void;

export function useAppFormik<Values extends FormikValues = FormikValues>(
  props: FormikProps<Values>,
) {
  const validate = useCallback(
    (data: Values) => {
      const res = props.schema.safeParse(data);
      if (res.error) {
        return res.error.formErrors.fieldErrors;
      }
    },
    [props.schema],
  );

  const { t } = useTranslation();

  const {
    setFieldValue,
    setFieldTouched,
    setFieldError,
    errors,
    touched,
    ...other
  } = useFormik<Values>({ validate, ...props });

  const touchedErrors = useMemo(() => {
    const newErrors: TouchedErrors<Values> = {};
    Object.entries(touched).forEach(([key, value]) => {
      if (value && errors[key as keyof Values]) {
        const errorValue = errors[key as keyof Values] as Array<string>;
        newErrors[key as keyof Values] = errorValue
          .map((code: string) => {
            return t(`errors.${code}`);
          })
          .join(', ');
      }
    });
    return newErrors;
  }, [errors, t, touched]);

  return {
    setFieldValue: setFieldValue as ISetFieldValue<Values>,
    setFieldTouched: setFieldTouched as ISetFieldTouched<Values>,
    setFieldError: setFieldError as ISetFieldErrors<Values>,
    touched,
    errors,
    touchedErrors,
    ...other,
  };
}
