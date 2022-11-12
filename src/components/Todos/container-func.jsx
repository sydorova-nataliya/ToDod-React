import React , {useState, useEffect } from 'react';
import useGetData from '../../hooks/useGetData';


import TodosComponent from "./component";

import './styles.scss';

const Todos =()=>{
  const [enterTodo, setEnterTodo] = useState('');
  const [todos, setTodos] = useState([]);
  
 const {data, error, loading} = useGetData('https://jsonplaceholder.typicode.com/todos'); 

   const handleEnterTodo = e => {

    setEnterTodo(e.target.value);
  }

  useEffect(()=>{
    setTodos(data)
  },[data])
  const handleAddTodo = () => {
  
    if(enterTodo!==''){
      const newTodo = {
        id: Math.round(Math.random() * 100),
        title: enterTodo,
        completed: false,
      }
      setEnterTodo('');
      setTodos([...todos, newTodo]);
    }

  }

  const handleRemoveTodo = todoId => {


    const updatedTodos = todos.filter(todo => todoId !== todo.id);


    setTodos(updatedTodos);

  }
  if(loading){
    return 'loading'
  }
  const handleCheckTodo = (todoId) => {

    const checkedTodos = todos.map(todo => {
      if(todo.id===todoId){
        return {
          ...todo,
          completed:!todo.completed
        }
      }
      return todo;
    });
    setTodos(checkedTodos)

  }

  const isTodosEmpty=  todos.length === 0;
  

  return (
    <TodosComponent
      enterTodo={enterTodo}
      todos={todos}
      isTodosEmpty={isTodosEmpty}
      onEnterTodo={handleEnterTodo}
      onAddTodo={handleAddTodo}
      onRemoveTodo={handleRemoveTodo}
      onCheckTodo={handleCheckTodo}
    />
  )
}


export default Todos;
