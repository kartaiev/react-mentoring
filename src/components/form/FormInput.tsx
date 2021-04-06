import React, { FC } from 'react';
import { InputControl } from 'formik-chakra-ui';
import { FormLabel, FormControl } from '@chakra-ui/react';

type Props = {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
};

const FormInput: FC<Props> = ({ name, label, placeholder, type }: Props) => {
  return (
    <FormControl id={label}>
      <FormLabel color="#F65261" fontWeight="bold" pb={2}>
        {name}
      </FormLabel>
      <InputControl
        name={name}
        mb={4}
        inputProps={{
          type: type,
          placeholder: placeholder,
          borderColor: 'gray.600'
        }}
      />
    </FormControl>
  );
};

export default FormInput;
