import React, { useState } from 'react'
import TodoForm from './TodoForm'
import './todoWrapper.scss'
import { v4 as uuidv4} from  'uuid'
import Todo from './todo';
import Popup from './Popup';
import EditTodo from './EditTodo';
import Edit from './Edit';
uuidv4();

const Todowrapper = () => {

  const [todos, setTodos] = useState([])
  const [edit, setEdit] = useState({
    show: false,
    task: "",
    id:"",
  });
  const [popup, setPopup] = useState({
    show: false, 
    id: null,
  });


  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    console.log(todos)
  }

  const deleteTodo = id => {
    setPopup({
      show: true,
      id,
    });
  };

  const todoDeleteTrue = () => {
    if (popup.show && popup.id) {
      let filteredData = todos.filter((todo) => todo.id !== popup.id);
      setTodos(filteredData);
      setPopup({
        show: false,
        id: null,
      });
    }
  };

  const closePopup = (id) =>{
    setPopup({show: false, id})
  }

  const todoDeleteFalse = () => {
    setPopup({
      show: false,
      id: null,
    });
  };

const editTodoTrue = id => {
    let et = todos.map(todo => todo.id === id? {...todo, isEditing: !todo.isEditing} : todo);
    setTodos(et);
    setEdit({
      show: false,
      id:"",
      task:"",
    })
}

  const editTodo = id => {
        setEdit({
      show: true,
      id,
      task,
    })
  }

  const editTask = (task, id) => {
    let tarf = todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo);
    setTodos(tarf);
    setEdit({
      show: false,
      id:"",
      task:"",
    });
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
      {popup.show && (
  <Popup
    todoDeleteTrue={todoDeleteTrue}
    todoDeleteFalse={todoDeleteFalse}
    closePopup={closePopup}
  />

  
)} 

{edit.show && (
  editTodotrue={editTodoTrue}
)}
      <TodoForm addTodo={addTodo}/>
     
      
    </div>
  )
    
}

export default Todowrapper