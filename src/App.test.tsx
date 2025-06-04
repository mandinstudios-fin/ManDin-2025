import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero text', () => {
  render(<App />);
  const heading = screen.getByText(/Where expertise meets artistry/i);
  expect(heading).toBeInTheDocument();
});
