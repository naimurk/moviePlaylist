import { useContext, useEffect, useState } from "react";
import SpecificMovieList from "./SpecificMovieList";
import { MovieListContext } from "../../main";


const MovieList = () => {
    const [movieListValue, setMovieListValue]=useContext(MovieListContext)
    const [MovieList,SetMovieList]= useState([])
    
    useEffect(()=> {
        fetch("http://localhost:5000/getAllSong")
        .then(res => res.json())
        .then(data=> SetMovieList(data))
    },[movieListValue])
   
    // console.log(MovieList);
    return (
        <div className="">
            {/* movie container */}
            
            {
                MovieList && MovieList.map((item, index)=> <SpecificMovieList
                key={item?._id}
                item={item}
                >
                    
                </SpecificMovieList>)
            }
           
        </div>
    );
};

export default MovieList;