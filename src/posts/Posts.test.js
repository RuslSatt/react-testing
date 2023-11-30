import { render, screen } from '@testing-library/react';
import axios from 'axios';
import Posts from './Posts';

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
        render(<Posts />);
        const posts = await screen.findAllByTestId('post');
        expect(posts.length).toBe(2);
        expect(axios.get).toHaveBeenCalledTimes(1);
    });
});
