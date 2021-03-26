import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../../Comment/Comment';

const ShowMore = () => {
    
    const {postID}= useParams();
    const [post, setPost] = useState({})
    const [comments, setComment] = useState([])

    useEffect(() => {
         const url = `https://jsonplaceholder.typicode.com/posts/${postID}`;
         fetch(url)
        .then(res => res.json())
        .then(data =>setPost(data));
    },[postID])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postID}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setComment(data));
    }, [postID]);

    return (
        <div>
            <h4>This is details: {postID}</h4>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <h2>Total Same ids details : {comments.length}</h2>
            {
                comments.map(com => <Comment com={com} ></Comment>)
            }
        </div>
    );
};

export default ShowMore;