import { render, screen } from '@testing-library/react';
import App from './App';

test('YellowSailProect', () => {
  render(<App />);
  const linkElement = screen.getByText(/Yellow Sail/i);
  expect(linkElement).toBeInTheDocument();
});
