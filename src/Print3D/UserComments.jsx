import React from "react";

function UserComments({comments}) {
  return (
    <React.Fragment>
      <ul>
        {comments && comments.map(({id, author, text}) => (
          <li key={id}>
            <p style={{fontWeight: '700'}}>{author}</p>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default UserComments;
