import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {PostDetail} from "./PostDetail/PostDetail";
import {postService} from "../../services";


const Post = () => {
    const [post, setPost] = useState(null);
    const {postId} = useParams();

    useEffect(() => {
        postService.getById(postId).then(({data}) => setPost(data))
    }, [postId])

    return (
        <div>
            {post && <PostDetail post={post}/>}
        </div>
    );
};

export {Post};