import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ResidentInfo from './components/ResidentInfo'
import LocationInfo from './components/LocationInfo'
import getNumberRandom from './utils/getNumberRandom'
import FilterList from './components/FilterList'

function App() {

  const [location, setLocation] = useState()
  const [inputSearch, setInputSearch] = useState(getNumberRandom)
  const [nameLocation, setNameLocation] = useState()

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${inputSearch}`
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  }, [inputSearch])

  const handleSubmit = e => {
    e.preventDefault()
    setInputSearch(e.target.locationId.value)
  }

  const handleChange = e => {
if(e.target.value===""){
return setNameLocation()
}else{
    let URL = `https://rickandmortyapi.com/api/location?name=${e.target.value}`
    axios.get(URL)
      .then(res => setNameLocation(res.data))
      .catch(err => console.log(err))
}
  }

  return (
    <div className="App">
      <div className='header' >
        <h1 className='header__title' >
          Rick and Morty</h1>
      <form onSubmit={handleSubmit}  >
        <input
        autocomplete='off'
        className='input'
          id='locationId'
          type="text"
          placeholder='Enter a number from 1 to 126 or Dimension '
          onChange={handleChange}
        />
        <button className='btn' >Search</button>
              <FilterList
      setInputSearch={setInputSearch}
      nameLocation={nameLocation}
      />
      </form></div>
      
      <LocationInfo   location={location} />
      <div className='card-container' >
          {location?.residents.map(URL =>
        (<ResidentInfo key={URL} URL={URL} />))}
      </div>
    
    </div>
  )
}

export default App
