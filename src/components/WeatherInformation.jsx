/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Sunrise from '../assets/sunrise.png'
import Sunset from '../assets/sunset.png'

const WeatherInformation = ({ weatherInformation }) => {

    function convertingUppercase(string){

        return string.split(' ').map(x => x[0].toUpperCase().concat(x.slice(1))).join(" ")

    }

    function convertingAMPM(seconds){

        const date = new Date((seconds) * 1000)
        let hours = date.getHours() //in 24 hours format
        const minutes = date.getMinutes()

        let AMPM = (hours >= 12) ? "PM" : "AM" 
        
        hours = (hours % 12) || 12 //converting to 12 hour format
        
        return `${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")} ${AMPM}`

    }

    return (
        <div className='text-white flex flex-col gap-y-6'>

            <h1 className='flex justify-center items-center text-[28px] font-semibold mt-[20px]'>{weatherInformation.name} <img className='w-[60px] h-[60px]' src={`https://openweathermap.org/img/wn/${weatherInformation.weather[0].icon}@2x.png`} alt="icon" />{weatherInformation.weather[0].main}</h1>

            {/* Information */}
            <div className='flex flex-col lg:flex-row justify-center items-center gap-y-5 lg:gap-x-4'>

                {/* Temperature */}
                <div className='items w-[350px] lg:w-[30%] h-[217px] flex flex-col rounded-md shadow-[0_0_3px_rgba(0,0,0,0.2)] border-[1px] border-[rgba(0,0,0,0.2)]'>

                    <h2 className='bg-[#3498db] rounded-t-md font-semibold px-[10px] py-[10px] text-[20px] text-center'>Temperatures</h2>

                    <div className='p-[20px] text-center flex flex-col gap-y-2'>

                        <h2 className='font-semibold text-[24px]'>{weatherInformation.main.temp}℃</h2>

                        <div className='text-[18px] flex flex-col gap-y-1'>

                            <p>Feels like {weatherInformation.main.feels_like}℃</p>
                            <p>Min Temperature is {weatherInformation.main.temp_min}℃</p>
                            <p>Max Temperature is {weatherInformation.main.temp_max}℃</p>

                        </div>

                    </div>

                </div>

                {/* humidity */}
                <div className='items w-[350px] lg:w-[30%] h-[217px] flex flex-col rounded-md shadow-[0_0_3px_rgba(0,0,0,0.2)] border-[1px] border-[rgba(0,0,0,0.2)]'>

                    <h2 className='bg-[#3498db] rounded-t-md font-semibold px-[10px] py-[10px] text-[20px] text-center'>Humidity</h2>

                    <div className='p-[20px] text-center flex flex-col gap-y-2'>

                        <h2 className='font-semibold text-[24px]'>{weatherInformation.main.humidity}%</h2>

                        <div className='text-[18px] flex flex-col gap-y-1'>

                            <p>Cloudy {weatherInformation.clouds.all}%</p>
                            <p>{convertingUppercase(weatherInformation.weather[0].description)}</p>
                            <p>Pressure {weatherInformation.main.pressure}hPa</p>

                        </div>

                    </div>

                </div>

                {/* wind info */}
                <div className='items w-[350px] lg:w-[30%] h-[217px] flex flex-col rounded-md shadow-[0_0_3px_rgba(0,0,0,0.2)] border-[1px] border-[rgba(0,0,0,0.2)]'>

                    <h2 className='bg-[#3498db] rounded-t-md font-semibold px-[10px] py-[10px] text-[20px] text-center'>Wind Info</h2>

                    <div className='p-[20px] text-center flex flex-col gap-y-2'>

                        <h2 className='font-semibold text-[24px]'>Average Speed {weatherInformation.wind.speed} m/s</h2>

                        <div className='text-[18px] flex flex-col gap-y-1'>

                            <p>Wind degrees {weatherInformation.wind.deg}°</p>
                            {weatherInformation.wind.gust && <p>Gust speed {weatherInformation.wind.gust} m/s</p>}
                            <p>Visibility {weatherInformation.visibility} meters</p>

                        </div>

                    </div>

                </div>

            </div>

            {/* Sunrise and sunset */}

            <div className='flex flex-col justify-center items-center gap-y-5 font-semibold mt-[20px]'>

                <h2 className='flex items-center gap-x-4 text-[24px]'>Sunrise : {convertingAMPM(weatherInformation.sys.sunrise)} <img className='w-[40px] h-[40px]' src={Sunrise} alt="sunrise" /></h2>
                <h2 className='flex items-center gap-x-4 text-[24px]'>Sunset : {convertingAMPM(weatherInformation.sys.sunset)} <img className='w-[40px] h-[40px]' src={Sunset} alt="sunset" /></h2>

            </div>

        </div>
    )
}

export default WeatherInformation
