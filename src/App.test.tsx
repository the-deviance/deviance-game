import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the age gate splash screen', () => {
  render(<App />);
  expect(screen.getByText(/over 18/i)).toBeInTheDocument();
});
