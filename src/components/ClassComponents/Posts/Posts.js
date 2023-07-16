import React from "react";
import axios from "axios";
import {Endpoints} from "../../../api/Endpoints";
const {REACT_APP_BASEURL} = process.env;
class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }


    componentDidMount() {
        axios.get(REACT_APP_BASEURL + Endpoints.POST)
            .then(response => {
                this.setState({ posts: response.data });
            })
            .catch(error => {
                console.error('Error', error);
            });
    }

    render() {
        const { posts } = this.state;

        return (
            <div>
                {posts.map(post => (
                    <div key={post.id}>
                        <h2>ID: {post.id}</h2>
                        <h2>UserId: {post.userId}</h2>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;