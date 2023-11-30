import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Test react', () => {
    test('renders learn react link', () => {
        render(<App />);
        const increment = screen.getByText(/Increment/i);
        const decrement = screen.getByText(/Decrement/i);
        expect(increment).toBeInTheDocument();
        expect(decrement).toBeInTheDocument();
    });

    test('query element', () => {
        render(<App />);
        const head = screen.queryByText(/Hello world/i);
        expect(head).toBeNull();
    });

    test('find element', async () => {
        render(<App />);
        const head = await screen.findByText(/Has data in the page/i);
        expect(head).toBeInTheDocument();
    });

    test('increment button', async () => {
        render(<App />);
        const input = screen.getByTestId('input');
        const incrementBtn = screen.getByTestId('increment');
        const defaultValue = input.value;
        // fireEvent.click(incrementBtn);
        // Воспроизводит взаимодействие пользователя
        userEvent.click(incrementBtn);
        expect(+input.value).toBeGreaterThan(+defaultValue);
    });
});
