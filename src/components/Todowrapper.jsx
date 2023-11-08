import React, { useState } from 'react'
import TodoForm from './TodoForm'
import './todoWrapper.scss'
import { v4 as uuidv4} from  'uuid'
import Todo from './Todo';
import EditTodo from './EditTodo';

uuidv4();

const Todowrapper = () => {

  const [todos, setTodos] = useState([])
 
  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    console.log(todos)
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    };
  


  {/* AREA DE EDIÇÃO */}
const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id? {...todo, isEditing: !todo.isEditing} : todo));
    
  }
  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo));
  
  }
  

  return (
    <div className='TodoWrapper'>
      <ul>
        <li>Tarefas</li>
        <li>Status</li>
        <li>Opções</li>
      </ul>
        <hr />

        {todos.map((todo, index) =>(
          todo.isEditing ? (<EditTodo editTodo={editTask} task={todo}/>) :( 
          <Todo task={todo} key={index} 
       deleteTodo={deleteTodo} editTodo={editTodo} />
          )     
      ))}
      <TodoForm addTodo={addTodo}/>    
      
    </div>
  )
    
}

export default Todowrapper