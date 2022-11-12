import React from "react";

import './styles.scss';

const Item = ({ id,title, completed, onRemoveTodo, onCheckTodo }) => (
  <li  className = {completed ? 'item checkClass' : 'item' }  >
    <div className="value">
      <input
        className='checked'
        type="checkbox"
        onClick={() => onCheckTodo(id)}
      />
      
     {title}
    </div>
    <button onClick={() => onRemoveTodo(id)}>
      x
    </button>
  </li>
)

export default Item;
