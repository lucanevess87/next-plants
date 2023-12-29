import clsx from 'clsx';
import React, { ForwardRefRenderFunction, forwardRef } from 'react';

import { FieldGroup } from './FieldGroup';

type TextInputProps = {
  label?: string;
  errorMessage?: string;
  errorMessageProps?: string;
  inputProps?: string;
  containerProps?: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const InputFieldBase: ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = (
  { label, errorMessage, inputProps, containerProps, errorMessageProps, ...rest },
  ref,
) => {
  return (
    <FieldGroup
      errorMessage={errorMessage}
      label={label}
      classToOverride={containerProps}
      errorMessageProps={errorMessageProps}
    >
      <input
        ref={ref}
        type="text"
        autoComplete="off"
        onWheel={(event) => event?.currentTarget?.blur()}
        className={clsx('border text-sm border-brandGray p-2 rounded-md', inputProps)}
        {...rest}
      />
    </FieldGroup>
  );
};

export const InputField = forwardRef(InputFieldBase);
