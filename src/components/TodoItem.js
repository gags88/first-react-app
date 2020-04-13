import React from 'react';

function TodoItem(props) {

  const completedStyle = {
    fontStyle: "italic",
    textDecoration: "line-through",
    color: "#cdcdcd"
  }

  return (
    <p className="item-para">
      <input type="checkbox" className="regular-checkbox" checked={props.item.completed} onChange={() => props.handleChange(props.item.id)} />
      <label style={ props.item.completed ? completedStyle : null }>{props.item.text}</label>
    </p>
  );
}

export default TodoItem;