import React, { FC } from 'react';
import tw from 'twin.macro';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { PopoverTrigger } from '@chakra-ui/react';

const Button = tw.button`px-12 bg-bgColorAlt bg-opacity-70 text-danger font-logoAlt rounded font-bold text-2xl`;
const DangerButton = tw(Button)`px-24 bg-danger text-gray-50 h-20 mt-20`;
const DangerButtonLG = tw(
  DangerButton
)`px-12 w-full h-12 mt-0 rounded-none mt-4`;
const DangerButtonSM = tw(DangerButton)`w-1/3 h-12 mt-0 px-0`;
const BorderedButtonSM = tw(
  DangerButtonSM
)`bg-bgColor border border-danger mr-4 text-danger`;

const RoundedButton = tw(
  Button
)`p-3 bg-bgColor rounded-full flex justify-center items-center text-gray-50 absolute top-6 right-6`;

const MotionButton = motion(Button);
const MotionDangerButton = motion(DangerButton);
const MotionDangerButtonSM = motion(DangerButtonSM);
const MotionBorderedButtonSM = motion(BorderedButtonSM);
const MotionRoundedButton = motion(RoundedButton);

type Props = {
  btnName: string;
  onClick?: (e: React.FormEvent) => void | (() => void);
  type?: 'button' | 'submit' | 'reset' | undefined;
};

type SmallProps = {
  btnName: string;
  onClick?: () => void;
};

export const TransparentButton: FC<Props> = ({ btnName, onClick }: Props) => (
  <MotionButton onClick={onClick} whileHover={{ scale: 1.1 }}>
    <span>{btnName}</span>
  </MotionButton>
);

export const ButtonDanger: FC<Props> = ({ btnName, onClick, type }: Props) => (
  <MotionDangerButton whileHover={{ scale: 1.1 }} onClick={onClick} type={type}>
    <span>{btnName}</span>
  </MotionDangerButton>
);

export const SmallButtonDanger: FC<SmallProps> = ({
  btnName,
  onClick
}: SmallProps) => (
  <DangerButtonLG onClick={onClick}>
    <span>{btnName}</span>
  </DangerButtonLG>
);

export const MotionButtonDangerSM: FC<SmallProps> = ({
  btnName,
  onClick
}: SmallProps) => (
  <MotionDangerButtonSM onClick={onClick} whileHover={{ scale: 1.1 }}>
    <span>{btnName}</span>
  </MotionDangerButtonSM>
);

export const MotionButtonBorderedSM: FC<SmallProps> = ({
  btnName
}: SmallProps) => (
  <MotionBorderedButtonSM whileHover={{ scale: 1.1 }}>
    <span>{btnName}</span>
  </MotionBorderedButtonSM>
);

export const DotsButton: FC = () => {
  return (
    <PopoverTrigger>
      <MotionRoundedButton whileHover={{ scale: 1.1 }}>
        <HiOutlineDotsVertical />
      </MotionRoundedButton>
    </PopoverTrigger>
  );
};
