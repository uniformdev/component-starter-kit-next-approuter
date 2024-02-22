import { ChangeEvent } from 'react';

export type InputProps = {
  id?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  label?: string;
  disabled?: boolean;
  rows?: number;
  errorMessage?: string;
  onChange?(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void;
  value?: string;
};

export * from './Input';
export { default } from './Input';
