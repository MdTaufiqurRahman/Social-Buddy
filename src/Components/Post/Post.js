import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory();
    const showMore = id =>{
            const url = `post/${id}`;
            history.push(url);
    }
    return (
        <div style={{border: '1px solid purple',margin: '10px',padding: '10px',borderRadius:'10px',backgroundColor:'skyblue'}} >
            <h3>{id} : {title}</h3>
            <p>{body}</p>
            <button onClick={() =>showMore(id)} >More Details</button>
        </div>
    );
};

export default Post;