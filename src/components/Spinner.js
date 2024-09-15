import React from 'react'
import loading from './loading.gif'

const Spinner=()=> {
  
    return (
      <div className='text-center'>
        <img className='my-4' src={loading} alt="loading" style={{height:"50px",width:"50px"}}/>
      </div>
    )
}

export default Spinner
