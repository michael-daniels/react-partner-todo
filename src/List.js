import React from 'react';
import SingleItem from './SingleItem'

const List = (props) => {
  console.log("List Props", props)

  let listOfItems = props.todos ? props.todos.map((item) => {
    return <SingleItem key={item.id} todos={item}/>
  }) : null
    return (
      <div>
        {listOfItems}
      </div>
    );

}

export default List;
