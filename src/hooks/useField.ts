import React, { useState, useCallback, Dispatch } from 'react';

type useFieldType = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValue: Dispatch<React.SetStateAction<string>>;
};

export const useField = (initialValue = ''): useFieldType => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    []
  );
  return { value, onChange, setValue };
};
