import React, { useState } from 'react'

function Feeding() {

  const [walkHistory, setWalkHistory] = useState();

  function combo() {
    
  }

  function generateDate(){
    let currentTime = new Date();                
    return currentTime;
}

  return (
    <div className='feeding'>
      <h1>Feeding</h1>
      <form className='feeding-form'>
        <h3>Add Walk</h3>
        <div className='field'>
          <label>Date:</label>
            <input 
              type='text'
              name='date'
              value={generateDate()}          
            /><br />
          <label>User:</label>
          <select>
            <option value='Bob'>Bob</option>
            <option value='Hank'>Hank</option>
          </select><br />
          <button>Add Feeding</button>
        </div>
      </form>
      <h3>Feeding History</h3>
    </div>
  )
}

export default Feeding
