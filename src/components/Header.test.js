import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderTestRouters } from '../helpers/renderTestRouters';
import { act } from 'react-dom/test-utils';
import { Header } from './Header';

describe('Test links in the react app', () => {
    test('link to about page', async () => {
        renderTestRouters(<Header />);
        const link = screen.getByTestId('about-link');
        await act(() => {
            userEvent.click(link);
        });
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });

    test('link to main page', async () => {
        renderTestRouters(<Header />);
        const link = screen.getByTestId('main-link');
        await act(() => {
            userEvent.click(link);
        });
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });

    test('link to posts page', async () => {
        renderTestRouters(<Header />);
        const link = screen.getByTestId('posts-link');
        await act(() => {
            userEvent.click(link);
        });
        expect(screen.getByTestId('posts-page')).toBeInTheDocument();
    });
});
