import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TopMainPanel } from './TopMainPanel';

test('renders TopMainPanel component', () => {
  const { getByText } = render(<TopMainPanel />);
  
  expect(getByText('Прогноз')).toBeInTheDocument();
  expect(getByText('на неделю')).toBeInTheDocument();
  expect(getByText('почасовой')).toBeInTheDocument();
});
