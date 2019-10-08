import React from 'react';

function Filter({ filteredVal, handleFilteredVal }) {
  return (
    <form action="">
      <div>filter shown with <input value={filteredVal} onChange={handleFilteredVal} /></div>
    </form>
  )
}

export default Filter;