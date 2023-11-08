import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './Todo.scss'
const Todo = ({task, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>  
      <p>{task.task}</p>
      <input className='todoCheck' type='checkbox'/>
      <div>
          <FontAwesomeIcon className='pen' icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
          <FontAwesomeIcon className='trash' icon={faTrash} onClick={()=> deleteTodo(task.id)} />
      </div>
      
    </div>
  )
}

export default Todo