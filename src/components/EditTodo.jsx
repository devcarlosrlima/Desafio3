import React, { useState } from 'react'
import './editTodo.scss'


const EditTodo = ({editTodo, task}) => {

  const [value, setValue] = useState(task.task);

  const handleSubmit = e => {
    e.preventDefault();

    editTodo(value, task.id)

    setValue('')
  }

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
    <input required type="text" className=" todoInput" value={value} 
    placeholder="Edite aqui" onChange={(e) => setValue (e.target.value)}/>
    <button type="submit" className="todoEditBtn">Atualize</button>
</form>
  )
}

export default EditTodo