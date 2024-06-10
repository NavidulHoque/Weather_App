/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"

const Navbar = ({handleWeatherInformation}) => {
  const [city, setcity] = useState('')

  return (
    <nav className="bg-[rgba(0,0,0,0.05)] flex flex-col lg:flex-row lg:justify-between items-center gap-y-5 py-[15px] lg:py-0 lg:h-[90px]">

        <h1 className="text-[30px] font-semibold text-white pl-[20px]">Weather App</h1>

        <form onSubmit={(e) => handleWeatherInformation(e, city)} className="flex w-full lg:w-auto justify-center items-center lg:pr-[25px] text-[15px] gap-x-4">

            <input type="search" className="w-[70%] p-[8px] rounded-[3px] outline-none border-[1px] border-[rgba(0,_0,_0,_0.2)] focus:ring-[rgba(52,_152,_219,_0.5)] focus:ring-[4px]" onChange={(e) => setcity(e.target.value)} value={city} autoComplete="on" autoFocus />

            <button className="transition-all duration-300 text-[#3498db] hover:text-[white] hover:bg-[#3498db] bg-white font-semibold p-[8px] rounded-[3px]">Submit</button>

        </form>
      
    </nav>
  )
}

export default Navbar
