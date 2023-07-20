import React, {useEffect, useState} from 'react';
import {ContentServices} from "../../services/apiServices";
import {CommentContainer} from "./CommentContainer";

const CommentsComponent = ( {postId}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const commentsData = await ContentServices.getComments();
                setComments(commentsData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAlbums();
    }, []);


    return (

        <div>
            <div>
                {comments.map(comment=><CommentContainer key={comment.id} comment={comment} />)}
            </div>
        </div>
    );
};


export {CommentsComponent};