import React from "react";

import Item from "./Item";

import './styles.scss';

const List = ({ todos, onRemoveTodo, onCheckTodo }) => (
  <ul className="list">
    {todos.map(({ id, value, checked }) => (
      <Item
        key={id}
        id={id}
        value={value}
        checked={checked}
        onRemoveTodo={onRemoveTodo}
        onCheckTodo={onCheckTodo}
      />
    ))}
  </ul>
)

export default List;
