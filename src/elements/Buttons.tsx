import React, { FC } from 'react';
import tw from 'twin.macro';

const Button = tw.button`px-12 bg-bgColorAlt bg-opacity-70 text-danger font-logoAlt rounded font-bold text-2xl`;

const DangerButton = tw(Button)`px-24 bg-danger text-gray-50 h-20 mt-20`;

type Props = {
  btnName: string;
};

export const TransparentButton: FC<Props> = ({ btnName }: Props) => (
  <Button>
    <span>{btnName}</span>
  </Button>
);

export const ButtonDanger: FC<Props> = ({ btnName }: Props) => (
  <DangerButton>
    <span>{btnName}</span>
  </DangerButton>
);
