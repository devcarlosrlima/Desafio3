import React from 'react'

const Edit = ({editTodoTrue}) => {
  return (
    <div>
        <div className="modal">
      <p>You sure you wanna delete?</p>
      <button className="modal_buttonCancel" onClick={closePopup}>Cancel</button>
      <button onClick={editTodoTrue} className="modal_buttoDelete">
        Confirm
      </button>
    </div>
  
    </div>
  )
}

export default Edit