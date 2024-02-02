import { render, fireEvent } from '@testing-library/react';
import { Sidebar } from './Sidebar';

test('renders Sidebar component', () => {
  const { getByText, getByPlaceholderText } = render(<Sidebar />);
  
  expect(getByText('Москва')).toBeInTheDocument();
  expect(getByPlaceholderText('Введите город')).toBeInTheDocument();
});

test('finds city when input is valid', () => {
  const { getByText, getByPlaceholderText } = render(<Sidebar />);
  
  const cityInput = getByPlaceholderText('Введите город');
  
  fireEvent.change(cityInput, { target: { value: 'Москва' } });
  fireEvent.keyDown(cityInput, { keyCode: 13 });
  
  expect(getByText('Переменная облачность')).toBeInTheDocument();
});