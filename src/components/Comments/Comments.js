import React, {useEffect, useState} from 'react';

import {Comment} from "./Comment/Comment";
import {commentsService} from "../../services";


const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data}) => setComments(data))
    }, [])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};
export {Comments};
