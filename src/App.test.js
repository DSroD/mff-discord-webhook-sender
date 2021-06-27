import { render, screen } from '@testing-library/react';
import App from './App';


test('embed open and close', () => {
  render(<App />);
  const addEmbed = screen.getByText(/Add Embed/i);
  addEmbed.click();
  const newEmbed = screen.getByPlaceholderText(/Author name/i);
  expect(newEmbed).toBeInTheDocument();
}
)
