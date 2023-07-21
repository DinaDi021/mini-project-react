import React, {useEffect, useState} from 'react';
import {ContentServices} from "../../services/apiServices";
import {CommentContainer} from "./CommentContainer";
import {Outlet} from "react-router-dom";

const CommentsComponent = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const commentsData = await ContentServices.getComments();
                setComments(commentsData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchComments();
    }, []);

    return (

        <div>
            <div>
                {comments.map(comment => <CommentContainer key={comment.id} comment={comment} postId={comment.postId}/>)}
            </div>
            <Outlet/>
        </div>
    );
};


export {CommentsComponent};