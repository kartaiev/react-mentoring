import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NotFound from './NotFound';

afterEach(cleanup);

test('shows not found message', () => {
  const { getByText } = render(<NotFound />);
  expect(getByText('Not Found')).toBeInTheDocument();
  expect(getByText('404')).toBeInTheDocument();
});
