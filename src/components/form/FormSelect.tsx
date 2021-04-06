import React, { FC, Dispatch } from 'react';
import { ADD_EDIT_MOVIE } from '../../lib';
import { CUIAutoComplete } from 'chakra-ui-autocomplete';
import { FormControl } from '@chakra-ui/react';
import { Field, FieldProps } from 'formik';
import tw from 'twin.macro';

export interface Item {
  label: string;
  value: string;
}

type Props = {
  name: string;
  pickerItems: Item[];
  setPickerItems: Dispatch<
    React.SetStateAction<{ value: string; label: string }[]>
  >;
  selectedItems: Item[];
  setSelectedItems: Dispatch<React.SetStateAction<Item[]>>;
};

const FormSelect: FC<Props> = ({
  name,
  pickerItems,
  setPickerItems,
  selectedItems,
  setSelectedItems
}: Props) => {
  const handleCreateItem = (item: Item) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems?: Item[]) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
    }
  };

  return (
    <Field key="select">
      {({ field, form }: FieldProps) => {
        field.value.genres =
          !!selectedItems &&
          selectedItems.map(({ value }) => {
            return value.charAt(0).toUpperCase() + value.slice(1);
          });
        return (
          <FormControl name={name}>
            <CUIAutoComplete
              inputStyleProps={{
                borderWidth:
                  form.errors.genres && !selectedItems.length ? '2px' : '1px',
                borderColor:
                  form.errors.genres && !selectedItems.length
                    ? '#e53e3e'
                    : 'gray.600'
              }}
              labelStyleProps={{
                color: '#F65261',
                fontWeight: 'bold',
                mb: '0'
              }}
              listStyleProps={{
                bg: '#232323',
                borderColor:
                  form.errors.genres && !selectedItems.length
                    ? '#e53e3e'
                    : 'gray.600',
                marginBottom: '-1rem'
              }}
              toggleButtonStyleProps={{
                display: 'none'
              }}
              tagStyleProps={{
                bg: '#424242',
                color: 'gray.50',
                borderColor: 'gray.600'
              }}
              label={ADD_EDIT_MOVIE.GENRE}
              placeholder={ADD_EDIT_MOVIE.GENRE_PLACEHOLDER}
              onCreateItem={handleCreateItem}
              items={pickerItems}
              {...field}
              selectedItems={selectedItems}
              onSelectedItemsChange={(changes) =>
                handleSelectedItemsChange(changes.selectedItems)
              }
            />
            {form.errors.genres && !selectedItems.length ? (
              <Error>{form.errors.genres}</Error>
            ) : null}
          </FormControl>
        );
      }}
    </Field>
  );
};

export default FormSelect;

const Error = tw.div`text-danger absolute bottom-2`;
