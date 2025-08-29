import React from 'react'
import Moviecard from '../components/Moviecard'
import { useState } from 'react';
const Home = () => {
   const [search,setSearch] = useState("");
  return (
    <div className="bg-gray-900 min-h-300 text-white font-sans">

    <div className="pt-22  flex items-center justify-center ">
      <div className="w-full max-w-xl p-5 rounded-2xl">
       
        <input
          type="text"
          placeholder={`Search for a movie...`}
          className="p-4 rounded-lg w-full bg-black/60 backdrop-blur text-white placeholder-gray-400
                     border-2 border-transparent focus:outline-none focus:border-violet-500
                     transition duration-300 ease-in-out "
                     onChange={(e) => setSearch(e.target.value)}
        />
       
      </div>
    </div>
      <Moviecard search={search} setSearch={setSearch} />
    

    </div>
  )
}

export default Home
