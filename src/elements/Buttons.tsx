import React, { FC } from 'react';
import tw from 'twin.macro';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Button = tw.button`px-12 bg-bgColorAlt bg-opacity-70 text-danger font-logoAlt rounded font-bold text-2xl`;

const DangerButton = tw(Button)`px-24 bg-danger text-gray-50 h-20 mt-20`;

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
const MotionRoundedButton = motion.custom(RoundedButton);

type Props = {
  btnName: string;
};

export const TransparentButton: FC<Props> = ({ btnName }: Props) => (
  <MotionButton whileHover="hover" variants={variants}>
    <span>{btnName}</span>
  </MotionButton>
);

export const ButtonDanger: FC<Props> = ({ btnName }: Props) => (
  <MotionDangerButton whileHover="hover" variants={variants}>
    <span>{btnName}</span>
  </MotionDangerButton>
);
export const DotsButton: FC = () => {
  return (
    <MotionRoundedButton whileHover="hover" variants={variants}>
      <HiOutlineDotsVertical />
    </MotionRoundedButton>
  );
};
