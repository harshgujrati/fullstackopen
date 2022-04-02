import { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayCountries from './components/DisplayCountries'



const App = () => {

  const [searchCountry, setSearchCountry] = useState('')
  const [countryData, setCountryData] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountryData(response.data)
      })
  }, [])

  const handleSearch = (event) => {
    setSearchCountry(event.target.value)
  }

  const showCountry = countryData.filter(country => country.name.common.toLowerCase().includes(searchCountry.toLocaleLowerCase()))
  
  return(<>
  <input value={searchCountry} onChange={handleSearch}/>
  <DisplayCountries data={showCountry} countryData={countryData}/>
  </>)
}

export default App;
