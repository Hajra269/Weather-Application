import React from 'react';
import "./weather.css";

function Weather(props) {
  console.log(props,"propsss");
  return (
    <div className='container text-light'> 
       <div className='Card'>
       <h1 className="text-white py-3">{props.cityname}</h1>
         
       <h5 className="py-4">
          <i className={`wi ${props.weatherIcon} display-1`} />
        </h5>
           
              {props.temp ?  <h1 className='py-2'>{props.temp}&deg;</h1>:null} 
                {minmaxTemp(props.mintemp,props.maxtemp)}

                <h4 className="py-3">
                {typeof props.description === 'string' && props.description.length > 0
                ? props.description.charAt(0).toUpperCase() + props.description.slice(1)
                : ''}
         </h4>
       </div>
    
    </div>
  )
}

function minmaxTemp(min,max){
  if(min && max){
    return(
      <>
         <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
          </h3>
      </>
    )
  }else{}
}

export default Weather;