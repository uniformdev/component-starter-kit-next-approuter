import { FC } from 'react';
import { ComponentProps } from '@uniformdev/csk-components/types/cskTypes';
import { withFlattenParameters } from '@uniformdev/csk-components/utils/withFlattenParameters';

export type SearchInputParameters = {
  placeholder?: string;
};

export type SearchInputProps = ComponentProps<SearchInputParameters> & SearchInputParameters;

const SearchInput: FC<SearchInputProps> = ({ placeholder: _placeholder }) => (
  <div className="relative">
    <span aria-hidden className=" absolute inset-y-0 right-3 flex items-center z-10 cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-5 w-5 opacity-70">
        <path d="M384 208A176 176 0 1 0 32 208a176 176 0 1 0 352 0zM343.3 366C307 397.2 259.7 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 51.7-18.8 99-50 135.3L507.3 484.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L343.3 366z" />
      </svg>
    </span>
    <input
      type="text"
      className="max-w-xl rounded-sm border border-gray-400 pl-4 pr-10 py-2 placeholder-gray-400 bg-white"
      name="s"
      id="s"
      placeholder={_placeholder}
    />
  </div>
);

export default withFlattenParameters(SearchInput);
