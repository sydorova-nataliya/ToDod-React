import React from "react";

import './styles.scss';

const Item = ({ id,checked, value, onRemoveTodo, onCheckTodo }) => (
  <li  className = {checked ? 'item checkClass' : 'item' }  >
    <div className="value">
      <input
        className='checked'
        type="checkbox"
        onClick={() => onCheckTodo(id)}
      />
      
     {value}
    </div>
    <button onClick={() => onRemoveTodo(id)}>
      x
    </button>
  </li>
)

export default Item;
