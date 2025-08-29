import React, { useContext } from 'react'
import { watchListContext } from '../context/WatchListContext';

const Genre = ({genreList,setselectedGenre,selectedGenre}) => {
  return (

      <select className='mt-28  bg-black/80 text-gray-400 p-2 rounded border border-transparent focus:outline-none focus:border-violet-500 transition duration-300 ease-in-out' onChange={(e) => setselectedGenre(e.target.value)} value={selectedGenre}>
      <option value="">All Genres</option>
       {
        genreList.map((genre) => (
          <option key={genre.id} className='bg-black' value={genre.id}>{genre.name}</option>
        ))
       }
      </select>
  )
}

export default Genre
