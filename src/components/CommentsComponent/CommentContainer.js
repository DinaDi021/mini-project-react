import React from 'react';
import {Link} from "react-router-dom";
import styles from './CommentsComponent.css';
import { AppRoutes } from "../../Routing/AppRoutes";

const CommentContainer = ({ comment, postId }) => {
    const { id, name, email, body } = comment;

    return (
        <div className={styles.CommentContainer}>
            <Link to={`${AppRoutes.COMMENTS}/${postId}`}>
                <div>
                    <h3>{postId}</h3>
                    <h3>{id}</h3>
                    <h2>{name}</h2>
                    <h2>{email}</h2>
                    <p>{body}</p>
                </div>
            </Link>
        </div>
    );
};

export { CommentContainer };
