import React, { FC } from 'react';
import tw from 'twin.macro';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { PopoverTrigger } from '@chakra-ui/react';

const Button = tw.button`px-12 bg-bgColorAlt bg-opacity-70 text-danger font-logoAlt rounded font-bold text-2xl`;
const DangerButton = tw(Button)`px-24 bg-danger text-gray-50 h-20 mt-20`;
const DangerButtonLG = tw(DangerButton)`w-full h-12 mt-0 rounded-none mt-4`;
const DangerButtonSM = tw(DangerButton)`w-1/3 h-12 mt-0 px-0`;
const BorderedButtonSM = tw(
  DangerButtonSM
)`bg-bgColor border border-danger mr-4 text-danger`;

const RoundedButton = tw(
  Button
)`p-3 bg-bgColor rounded-full flex justify-center items-center text-gray-50 absolute top-6 right-6`;

const MotionButton = motion(Button);
const MotionDangerButton = motion(DangerButton);
const MotionDangerButtonLG = motion(DangerButtonLG);
const MotionDangerButtonSM = motion(DangerButtonSM);
const MotionBorderedButtonSM = motion(BorderedButtonSM);
const MotionRoundedButton = motion(RoundedButton);

type Props = {
  btnName: string;
  onClose?: () => void;
  onOpen?: () => void;
  onClick?: (e: React.FormEvent) => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

type SmallProps = {
  btnName: string;
  onOpen?: () => void;
};

export const TransparentButton: FC<Props> = ({ btnName, onOpen }: Props) => (
  <MotionButton onClick={onOpen} whileHover={{ scale: 1.1 }}>
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
  onOpen
}: SmallProps) => (
  <DangerButtonLG onClick={onOpen}>
    <span>{btnName}</span>
  </DangerButtonLG>
);

export const MotionButtonDangerLG: FC<SmallProps> = ({
  btnName
}: SmallProps) => (
  <MotionDangerButtonLG whileHover={{ scale: 1.1 }}>
    <span>{btnName}</span>
  </MotionDangerButtonLG>
);

export const MotionButtonDangerSM: FC<SmallProps> = ({
  btnName
}: SmallProps) => (
  <MotionDangerButtonSM whileHover={{ scale: 1.1 }}>
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
