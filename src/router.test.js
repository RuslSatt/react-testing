import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

describe('Router test', () => {
    test('link to page', async () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        const mainLink = screen.getByTestId('main-link');
        const aboutLink = screen.getByTestId('about-link');

        await act(async () => {
            userEvent.click(aboutLink);
        });
        expect(screen.getByTestId('about-page')).toBeInTheDocument();

        await act(async () => {
            userEvent.click(mainLink);
        });
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });

    test('error link to page', async () => {
        render(
            <MemoryRouter initialEntries={['/not']}>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByTestId('error-page')).toBeInTheDocument();
    });
});
