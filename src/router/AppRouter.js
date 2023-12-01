import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { AboutPage } from '../pages/AboutPage';
import { PostPage } from '../pages/PostPage';
import { ErrorPage } from '../pages/ErrorPage';
import Posts from '../posts/Posts';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostPage />} />
            <Route path="/*" element={<ErrorPage />} />
        </Routes>
    );
};
