import React from "react";
import axios from "axios";
import {Endpoints} from "../../../api/Endpoints";
const {REACT_APP_BASEURL} = process.env;
class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }


    componentDidMount() {
        axios.get(REACT_APP_BASEURL + Endpoints.COMMENT)
            .then(response => {
                this.setState({ comments: response.data });
            })
            .catch(error => {
                console.error('Error', error);
            });
    }

    render() {
        const { comments } = this.state;

        return (
            <div>
                {comments.map(comment => (
                    <div key={comment.id}>
                        <h2>ID: {comment.id}</h2>
                        <h2>UserId: {comment.postId}</h2>
                        <h3>{comment.name}</h3>
                        <h3>{comment.email}</h3>
                        <p>{comment.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;