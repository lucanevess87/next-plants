import clsx from 'clsx';
import { ReactNode } from 'react';

type FieldGroupProps = {
  classToOverride?: string;
  errorMessage?: string;
  inputLabelProps?: string;
  label?: string;
  inputAdornment?: JSX.Element;
  children: ReactNode;
  errorMessageProps?: string;
};

export const FieldGroup = ({
  label,
  errorMessage,
  inputAdornment,
  classToOverride,
  inputLabelProps,
  errorMessageProps,
  children,
}: FieldGroupProps) => {
  return (
    <div className={clsx('flex relative flex-col', classToOverride)}>
      {!!label && (
        <label
          className={clsx(
            'text-sm flex-row font-bold pb-1.5 flex',
            errorMessage && 'text-red-700 opacity-95 after:text-red-700',
            inputLabelProps,
          )}
        >
          <p className="text-sm font-semibold">{label}</p>
        </label>
      )}
      {children}
      {inputAdornment}
      {errorMessage && errorMessage !== '' && (
        <span className={clsx('pl-5', errorMessageProps)}>{errorMessage}</span>
      )}
    </div>
  );
};
