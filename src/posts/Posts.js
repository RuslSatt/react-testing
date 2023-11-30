import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const loadPosts = async () => {
        try {
            const response = axios.get('https://jsonplaceholder.typicode.com/posts');
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
                <div key={post.id} data-testid="post">
                    {post.title}
                </div>
            ))}
        </div>
    );
};

export default Posts;
