'use client';

import clsx from 'clsx';
import { Eye, EyeOff } from 'lucide-react';
import { ForwardRefRenderFunction, forwardRef, useState } from 'react';

import { FieldGroup } from './FieldGroup';

type TextInputProps = {
  label?: string;
  errorMessage?: string;
  errorMessageProps?: string;
  inputProps?: string;
  containerProps?: string;
  fieldValue: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const PasswordBase: ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = (
  { label, fieldValue, errorMessage, inputProps, containerProps, errorMessageProps, ...rest },
  ref,
) => {
  const [showPwd, setShowPwd] = useState(false);

  return (
    <FieldGroup
      errorMessage={errorMessage}
      label={label}
      classToOverride={containerProps}
      errorMessageProps={errorMessageProps}
    >
      <div className="relative">
        <input
          ref={ref}
          type={showPwd ? 'text' : 'password'}
          id="password"
          className={clsx('border text-sm border-brandGray p-2 rounded-md', inputProps)}
          autoComplete="off"
          {...rest}
        />
        {fieldValue && (
          <button
            type="button"
            className="absolute -translate-y-1/2 cursor-pointer top-1/2 right-6"
            onClick={() => setShowPwd(!showPwd)}
          >
            <span className="text-lg text-stormGray">{showPwd ? <Eye /> : <EyeOff />}</span>
          </button>
        )}
      </div>
    </FieldGroup>
  );
};

export const PasswordField = forwardRef(PasswordBase);
