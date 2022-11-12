import React from "react";

import Item from "./Item";

import './styles.scss';

const List = ({ todos, onRemoveTodo, onCheckTodo }) => (
  <ul className="list">
    {todos.map(({ id, title, completed }) => (
      <Item
        key={id}
        id={id}
        title={title}
        completed={completed}
        onRemoveTodo={onRemoveTodo}
        onCheckTodo={onCheckTodo}
      />
    ))}
  </ul>
)

export default List;
