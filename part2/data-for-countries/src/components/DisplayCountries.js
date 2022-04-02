import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './Country'

const DisplayCountries = ({data, countryData}) => {

    const [weatherData, setWeatherData] = useState({main: {temp: 'loading'},
                                                    weather: [{icon: 'loading'}],
                                                    wind: {speed: 'loading'} })
    
    useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY
      if(data.length === 1){
        
        const url = 'https://api.openweathermap.org/data/2.5/weather?q='+data[0].capital[0]+'&appid='+ api_key
        axios
        .get(url)
        .then(response => {
          setWeatherData(response.data)
        })
      }
    }, [data])  
  
  
    if(data.length > 10){
      return(<div>Too many Countries to Display</div>)
    }
    else if(data.length < 10 && data.length>1){
      return(<>
      {data.map(inddata => <Country key={inddata.name.common} data ={inddata} />)}
      </>)
    }
    else if(data.length === 0 && countryData.length !== 0){
      return(<div>No result Found</div>)
    }
    else if(data.length === 0 && countryData.length === 0){
      return(<div>Loading Countries</div>)
    }
    else{ // corresponds to data.length === 1
  
      
  
      const weatherIcon = 'http://openweathermap.org/img/wn/'+ weatherData.weather[0].icon +'@2x.png'
      return(
        <>
          <h1>{data[0].name.common}</h1>
          <div>Area: {data[0].area}</div><br/>
          <div><img src={data[0].flags.png} alt='country flag'/></div>
          <h2>Weather in {data[0].name.common}</h2>
          <div>Temprature:{weatherData.main.temp}</div>
          <div><img alt='weather condition' src={weatherIcon}/></div>
          <div>Wind: {weatherData.wind.speed}</div>
        </>
      )
    }
  }

  export default DisplayCountries
  