import React, { FC } from 'react';
import tw from 'twin.macro';

const Input = tw.input`w-full py-6 px-3 bg-bgColorAlt bg-opacity-70 rounded text-2xl text-gray-50`;

type Props = {
  placeholder: string;
};

export const SearchInput: FC<Props> = ({ placeholder }: Props) => (
  <Input placeholder={placeholder} />
);
