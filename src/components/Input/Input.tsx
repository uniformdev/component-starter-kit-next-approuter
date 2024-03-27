import { FC } from 'react';
import classNames from 'classnames';
import { InputProps } from '.';
import { ErrorIcon } from './ErrorIcon';

const Input: FC<InputProps> = ({
  id = '',
  type = 'text',
  placeholder = '',
  className = '',
  inputClassName = '',
  label = '',
  disabled = false,
  rows,
  errorMessage = '',
  onChange,
  value,
}) => {
  const baseProps = {
    id,
    type,
    className: classNames(
      'rounded appearance-none bg-white border border-gray-100 md:text-base text-xs text-black leading-5 pt-3 pr-9 pb-3 pl-3.5 w-full focus:border-black focus:outline-none p-3',
      inputClassName,
      { 'bg-lightgray placeholder:text-grey': disabled }
    ),
    placeholder,
    onChange,
    disabled,
    value,
  };
  return (
    <div className={classNames('min-h-[130px]', { 'sm:pt-2.5 pb-2.5': Boolean(label) }, className)}>
      {label && (
        <label htmlFor={id} className="block text-left leading-4 pb-4">
          {label}
        </label>
      )}
      <div className="relative">
        {rows ? <textarea {...baseProps} rows={rows} /> : <input {...baseProps} />}
        {Boolean(errorMessage) && <ErrorIcon className="absolute top-0 right-0 my-auto mr-2 h-full" />}
      </div>
      <span className="text-red-500">{errorMessage}</span>
    </div>
  );
};

export default Input;
