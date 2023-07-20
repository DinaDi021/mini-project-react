// import React, { useState, useEffect } from 'react';
// import {ContentServices} from "../../services/apiServices";
//
// function PostId({ postId }) {
//     const [post, setPost] = useState(null);
//
//     useEffect(() => {
//         const fetchPost = async () => {
//             try {
//                 const post = await ContentServices.getPosts(postId);
//                 setPost(post);
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         fetchPost();
//     }, []);
//
//     return (
//         <div>
//             {
//                 <div>
//                     <h2>{post.title}</h2>
//                     <p>{post.body}</p>
//                 </div>
//             }
//         </div>
//     );
// }
//
// export {PostId};
