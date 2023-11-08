import React, { useState } from 'react'
import './todoForm.scss'


const TodoForm = ({addTodo}) => {

  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    addTodo(value)

    setValue('')
  }

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
    <input required type="text" className=" todoInput" value={value} 
    placeholder="Nova tarefa" onChange={(e) => setValue (e.target.value)}/>
    <button type="submit" className="todoBtn">+</button>
</form>
  )
}

export default TodoForm