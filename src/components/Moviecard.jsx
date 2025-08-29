import React, { useState,useEffect, useContext } from "react";
import {FaHeart,FaRegHeart} from "react-icons/fa"
import { watchListContext } from "../context/WatchListContext";

   
const Moviecard = ({search,setSearch}) => {
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(1);
const{toggleWatchList,watchList} = useContext(watchListContext);

const isMovieInWatchList = (movie) => {
   return watchList.some(item => item.id === movie.id);
};

  useEffect(()=>{
      let url = `https://api.themoviedb.org/3/movie/popular?&page=${pages}&api_key=b316dc50784c16dab02be6a3db623d96`;
      if(search){
        url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=b316dc50784c16dab02be6a3db623d96`;
      }
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        setMovies(data.results);
    })
  }, [pages,search])
  return (
      <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {movies.map((movie, index) => (
        <div key={index} className="bg-black p-4 rounded-lg shadow-md text-white  relative">
          <img className="w-full h-80 object-contain rounded-sm mt-5" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h2 className="text-xl font-bold mt-5">{movie.title}</h2>
          <p className="text-gray-400">{movie.release_date}</p>
          <button className="absolute top-3 right-3 text-red-600 text-xl hover:cursor-pointer"onClick={() => toggleWatchList(movie)}>{(isMovieInWatchList(movie))?<FaHeart />:<FaRegHeart/>}</button>
        </div>
      ))}
      </div>
      <div className="flex justify-between p-4">
         <button disabled={pages==1}className='bg-violet-500 w-25 text-white px-4 py-2 rounded-lg hover:bg-violet-600 transition duration-300' onClick={() => setPages(prev=> prev - 1)}>Prev</button>
      <button className='bg-violet-500 text-white px-4 py-2 w-25 rounded-lg hover:bg-violet-600 transition duration-300' onClick={() => setPages(prev=> prev + 1)}>Next</button>
      </div>
      </>
  );
};

export default Moviecard;
