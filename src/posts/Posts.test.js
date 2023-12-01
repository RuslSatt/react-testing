/* eslint-disable testing-library/no-unnecessary-act */
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import { renderTestRouters } from '../helpers/renderTestRouters';

jest.mock('axios');

describe('test get data', () => {
    let response;
    beforeAll(() => {
        response = {
            data: [
                {
                    userId: 1,
                    id: 1,
                    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                },
                {
                    userId: 1,
                    id: 2,
                    title: 'qui est esse',
                },
            ],
        };
    });

    test('get data', async () => {
        axios.get.mockReturnValue(response);
        renderTestRouters(null, '/posts');
        const posts = await screen.findAllByTestId('post');
        expect(posts.length).toBe(2);
        expect(axios.get).toHaveBeenCalledTimes(1);
    });

    test('redirect to the post page', async () => {
        axios.get.mockReturnValue(response);
        renderTestRouters(null, '/posts');
        const posts = await screen.findAllByTestId('post');
        expect(posts.length).toBe(2);
        await act(() => {
            userEvent.click(posts[0]);
        });
        expect(screen.getByTestId('post-detail-page')).toBeInTheDocument();
    });
});
