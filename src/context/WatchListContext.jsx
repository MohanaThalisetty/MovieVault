import { createContext,useState,useEffect } from "react";
import React from "react";

export const watchListContext = createContext();

export const WatchListProvider = ({children})=>{
    const[watchList,setWatchList] = useState([]);
    const [genreList,setGenreList] = useState([]);
      useEffect(()=>{
          let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=b316dc50784c16dab02be6a3db623d96`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setGenreList(data.genres);
        })
      }, []);
    const toggleWatchList = (movie) => {
        const index = watchList.findIndex(item => item.id === movie.id);
        if (index === -1) {
            setWatchList([...watchList,movie]);
        } else {
            setWatchList([
                ...watchList.slice(0, index),
                ...watchList.slice(index+1)
            ]);
        }
    };
    return(
        <watchListContext.Provider value={{watchList,toggleWatchList, genreList}}>
            {children}
        </watchListContext.Provider>
    )
};
