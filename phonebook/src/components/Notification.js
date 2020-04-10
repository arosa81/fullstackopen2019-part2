import React from 'react';

const Notification = ({ messageType, message }) => {
  const error = {
    color: 'red',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  }

  const success = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  }


  if (message === null) {
    return null;
  }

  return (
    <div>
      {messageType === 'error'
        ? <div style={error}>{message}</div> 
        : <div style={success}>{message}</div>
      }
    </div>
  )
}

export default Notification;