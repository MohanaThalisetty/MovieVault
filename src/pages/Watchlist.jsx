import React, { useContext,useState } from "react";
import Genre from "../components/Genre";
import { watchListContext } from "../context/WatchListContext";
import { FaHeart } from "react-icons/fa"; // You can use FaRegHeart too if needed

const Watchlist = () => {
  const { watchList, toggleWatchList, genreList } = useContext(watchListContext);
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const filteredWatchList = watchList.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase())).filter((movie) =>{
    return !selectedGenre || movie.genre_ids.includes(Number(selectedGenre));
  })

  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      <div className="pt-24 flex flex-col items-center">
        <div className="w-full max-w-xl p-5 rounded-2xl fixed top-20 z-10">
          <input
            type="text"
            placeholder="Search for a movie..."
            className="p-4 rounded-lg w-full bg-black/60 backdrop-blur text-white placeholder-gray-400
                       border-2 border-transparent focus:outline-none focus:border-violet-500
                       transition duration-300 ease-in-out"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Genre genreList={genreList} selectedGenre={selectedGenre} setselectedGenre={setSelectedGenre} />
      </div>

      <div className="p-5">
        {watchList.length === 0 ? (
          <p className="text-center">No movies in your watchlist</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredWatchList.map((movie, index) => (
              <div key={index} className="bg-black p-4 rounded-lg shadow-md text-white relative">
                <img
                  className="w-full h-80 object-contain rounded-sm mt-5"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <h2 className="text-xl font-bold mt-5">{movie.title}</h2>
                <p className="text-gray-400">{movie.release_date}</p>
                <button
                  className="absolute top-3 right-3 text-violet-500 text-2xl hover:text-violet-300 transition duration-300 hover:cursor-pointer"
                  onClick={() => toggleWatchList(movie)}
                >
                  <FaHeart />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
