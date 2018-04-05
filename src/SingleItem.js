import React from 'react';


const SingleItem = ({todos}) => {
  console.log("Single item props")
    return (
      <div>
        <hr />
        Title: {todos.title}<br />
        Completed: {todos.completed ? "true" : "false"}
      </div>
    );

}

export default SingleItem;
