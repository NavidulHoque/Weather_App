/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import WeatherInformation from './components/WeatherInformation'


function App() {
  const [weatherInformation, setweatherInformation] = useState({})
  const [loading, setloading] = useState(true)
  const [storage, setStorage] = useState(null)

  //will run onload or init call
  useEffect(() => {

    handleWeatherInformation(null, "dhaka")

  }, [])


  // will run on when user puts some input in the search bar
  useEffect(() => {

    if (storage && !weatherInformation.message) {

      const intervalID = setInterval(() => {

        handleWeatherInformation(storage[0], storage[1])

      }, 10000);

      return () => {
        clearInterval(intervalID)
      }
    }

  }, [storage])

  async function handleWeatherInformation(e, city) {

    if (e) e.preventDefault()

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c927de3e36cf303715dda4806793ab3a&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    setweatherInformation(data)

    setStorage([e, city])

    setloading(false)
  }


  return (
    <div className='min-h-screen bg-[#2980b9]'>

      <Navbar handleWeatherInformation={handleWeatherInformation} />

      {loading ? <div className='text-center text-white text-[24px]'>Loading...</div> : weatherInformation.message ? <div className='text-center text-white text-[24px]'>City not found</div> : <WeatherInformation weatherInformation={weatherInformation} />}

    </div>
  )
}

export default App
