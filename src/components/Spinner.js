import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-4' src={loading} alt="loading" style={{height:"50px",width:"50px"}}/>
      </div>
    )
  }
}

export default Spinner
