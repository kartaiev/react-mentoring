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

const variants: any = {
  hover: {
    scale: 1.1
  },
  transition: { ease: 'easeOut' },
  off: { scale: 1 }
};

const MotionButton = motion.custom(Button);
const MotionDangerButton = motion.custom(DangerButton);
const MotionDangerButtonLG = motion.custom(DangerButtonLG);
const MotionDangerButtonSM = motion.custom(DangerButtonSM);
const MotionBorderedButtonSM = motion.custom(BorderedButtonSM);
const MotionRoundedButton = motion.custom(RoundedButton);

type Props = {
  btnName: string;
  onClose?: () => void;
  onOpen?: () => void;
};

type SmallProps = {
  btnName: string;
  onOpen?: () => void;
};

export const TransparentButton: FC<Props> = ({ btnName, onOpen }: Props) => (
  <MotionButton onClick={onOpen} whileHover="hover" variants={variants}>
    <span>{btnName}</span>
  </MotionButton>
);

export const ButtonDanger: FC<Props> = ({ btnName }: Props) => (
  <MotionDangerButton whileHover="hover" variants={variants}>
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
  <MotionDangerButtonLG whileHover="hover" variants={variants}>
    <span>{btnName}</span>
  </MotionDangerButtonLG>
);

export const MotionButtonDangerSM: FC<SmallProps> = ({
  btnName
}: SmallProps) => (
  <MotionDangerButtonSM whileHover="hover" variants={variants}>
    <span>{btnName}</span>
  </MotionDangerButtonSM>
);

export const MotionButtonBorderedSM: FC<SmallProps> = ({
  btnName
}: SmallProps) => (
  <MotionBorderedButtonSM whileHover="hover" variants={variants}>
    <span>{btnName}</span>
  </MotionBorderedButtonSM>
);

export const DotsButton: FC = () => {
  return (
    <PopoverTrigger>
      <MotionRoundedButton whileHover="hover" variants={variants}>
        <HiOutlineDotsVertical />
      </MotionRoundedButton>
    </PopoverTrigger>
  );
};
