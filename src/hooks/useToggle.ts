import { Dispatch, SetStateAction, useState } from 'react';

type useToggleType = {
  isToggled: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
  toggle: () => void;
};

export const useToggle = (initial = false): useToggleType => {
  const [isToggled, setToggle] = useState(initial);
  const toggle = () => setToggle((state) => !state);
  return { isToggled, setToggle, toggle };
};
