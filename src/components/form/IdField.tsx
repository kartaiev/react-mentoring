import React, { FC } from 'react';
import { FormLabel } from '@chakra-ui/react';
import { ADD_EDIT_MOVIE } from '../../lib';
import tw from 'twin.macro';

type Props = {
  id: number | undefined;
};

const IdField: FC<Props> = ({ id }: Props) => (
  <>
    <FormLabel color="#F65261" fontWeight="bold">
      {ADD_EDIT_MOVIE.ID}
    </FormLabel>
    <ID>{id}</ID>
  </>
);

export default IdField;

const ID = tw.p`mb-4`;
