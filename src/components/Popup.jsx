import React from 'react'
import './Popup.scss'


const Popup = ({todoDeleteTrue, closePopup}) => {

  return (
    <div className="modal">
      <p>You sure you wanna delete?</p>
      <button className="modal_buttonCancel" onClick={closePopup}>Cancel</button>
      <button onClick={todoDeleteTrue} className="modal_buttoDelete">
        Confirm
      </button>
    </div>
  
  )
}

export default Popup
