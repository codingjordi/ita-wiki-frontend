import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/¡Bienvenid@ a la wiki de la IT Academy!/i);
  expect(linkElement).toBeInTheDocument();
});
