import React, { useEffect, useState } from 'react';
import { ContentServices} from "../../services/apiServices";
import { Post } from "./Post";

const PostId = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postData = await ContentServices.getPosts();
                setPosts(postData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPost();
    }, []);


    return (
        <div>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export { PostId };
