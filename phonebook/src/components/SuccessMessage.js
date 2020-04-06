import React from 'react';

const SuccessMessage = ({ successMessage }) => {
  const success = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  }
  
  if (successMessage === null) {
    return null;
  }

  return (
    <div style={success}>
      {successMessage}
    </div>
  )
}

export default SuccessMessage;