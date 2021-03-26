import React from 'react';

const Comment = (props) => {
    const {name, email, body} = props.com;
    return (
            <p style={{border: '1px solid purple',width: '30%',
            display: 'inline-flex',margin: '10px',padding: '10px',height: '120px',borderRadius:'10px',backgroundColor:'yellow'}} >
                {name}:{email}:{body}
            </p>
            

    );
};

export default Comment;