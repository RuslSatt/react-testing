import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const loadPosts = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data);
        } catch (e) {
            console.log(e.message);
        }
    };

    useEffect(() => {
        loadPosts();
    }, []);

    return (
        <div>
            {posts.map((post) => (
                <Link to={`/posts/${post.id}`} key={post.id} data-testid="post">
                    {post.title}
                </Link>
            ))}
        </div>
    );
};

export default Posts;
