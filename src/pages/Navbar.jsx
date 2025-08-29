import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { watchListContext } from '../context/WatchListContext';
const Navbar = () => {
  const { watchList } = useContext(watchListContext);
  return (
    <nav className="bg-black/95 backdrop-blur-md px-8 py-5 flex justify-between items-center fixed w-full top-0 font-mono text-violet-400 text-lg shadow-md border-b border-violet-800/30 z-10">
   
      <Link 
        to="/" 
        className="font-extrabold text-2xl tracking-wide hover:text-violet-300 transition duration-300"
      >
        MovieVault
      </Link>
      
      <Link 
        to="/watchlist" 
        className="hover:text-violet-300 transition duration-300"
      >
        Wishlist ({watchList.length})
      </Link>
    </nav>
  )
}

export default Navbar
