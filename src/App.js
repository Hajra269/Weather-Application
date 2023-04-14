import React,{Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from './components/weather';
import "weather-icons/css/weather-icons.css";
import Form from './components/form';
const API_key = "665d281dd6d49890450bc86fdbdc4e71";
export default class App extends Component{
  constructor(props){
  super(props)
  this.state={
    city:undefined,
    country:undefined,
    main:undefined,
    temp_max:undefined,
    temp_min:undefined,
    icon:undefined,
    error:false,
    description:"",
    celcius:undefined,
  };

  this.weatherIcon={
    Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"

  }
  
  this.getWeather = this.getWeather.bind(this);
    this.getWeather();    
  }
  calCelcius(temp){
    let cell = Math.floor(temp-273.15)
    return cell;
  }
  get_weatherIcon(icons,rangeId){
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }
  async getWeather(e){
    
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    console.log(city,country,"countryyyyy");
   
    try {
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country},${city}&appid=${API_key}`);
      const response = await api_call.json();
      console.log(response,"response");

      this.setState({
        city:`${response.name},${response.sys.country}`,
        country: response.sys.country,
        main: response.weather[0].main,
        celcius: this.calCelcius(response.main.temp),
        temp_max: this.calCelcius(response.main.temp_max),
        temp_min: this.calCelcius(response.main.temp_min),
        description: response.weather[0].description,
        error: false
      });

      this.get_weatherIcon(this.weatherIcon,response.weather[0].id)
      
    } catch (error) {
      console.error(error);
      this.setState({ error: true });
    }

  }

  render() {
    console.log(this.state.icon,"iconssss");
    return (
      <div className="App">

        <Form loadweather={this.getWeather} error={this.state.error}></Form>
        {this.state.error ? (
          <div>Error loading weather data</div>
        ) : (
          <Weather 
           cityname={this.state.city}
            country={this.state.country} 
            temp={this.state.celcius}
            mintemp={this.state.temp_min}
            maxtemp={this.state.temp_max}
            description={this.state.description}
            weatherIcon={this.state.icon}
          />
        )}
      </div>
    )
  }
}
