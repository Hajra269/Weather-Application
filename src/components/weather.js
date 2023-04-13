import React from 'react';

function Weather(props) {
  console.log(props,"propsss");
  return (
    <div className='container'> 
       <div className='cards pt-4'>
            <h1>{props.country}, {props.city}</h1>
         
            <h5 className='py-4'>
               <i className={`wi${props.weatherIcon} display-1`}></i>
            </h5>
           
                <h1 className='py-2'>{props.temp}&deg;</h1>
                {minmaxTemp(props.mintemp,props.maxtemp)}
                <h4 className='p-3'>{props.description}</h4>
       </div>
    
    </div>
  )
}

function minmaxTemp(min,max){
    return(
      <>
        <h3>
            <span className='py-4'>{min}&deg;</span>
            <span className='py-8'>{max}&deg;</span>
        </h3>
      </>
    )
}

export default Weather;