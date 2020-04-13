import React from 'react';

function TodoItem(props) {
  return (
    <p className="item-para">
      <input type="checkbox" className="regular-checkbox" checked={props.item.completed} onChange={() => props.handleChange(props.item.id)} />
      <label style={{'textDecoration' : props.item.completed && 'line-through' }}>{props.item.text}</label>
    </p>
  );
}

export default TodoItem;