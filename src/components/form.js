import React from 'react';
import "./form.css";

function Form(props) {
  return (
    <div className='container'>
      <div>{props.error?error():null}</div>
       <form onsubmit={props.loadWeather()}>
        <div className='row'>
                <div className='col-md-3 offset md-2'>
                    <input type='text' className='form-control' name='city' 
                    autoComplete='off' placeholder='City'></input>
                </div>
                <div className='col-md-3'>
                    <input type='text' className='form-control' name='country' 
                    placeholder='country' autoComplete='off'></input>
                </div>
                <div className='col-md-3 mt-md-0 text-md-left'>
                <button className='btn btn-warning'>Get Weather</button>
                </div>
            </div>
       </form>
    </div>
  )
}

function error(){
  return(
    <div className='alert alert-danger mx-5' role='alert'>
      Please Enter city and country
    </div>
  )
}

export default Form