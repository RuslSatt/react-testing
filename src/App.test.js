import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App />);
    const heading = screen.getByText(/Increment/i);
    const button = screen.getByText(/Decrement/i);
    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
});
