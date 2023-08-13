import { useContext, useEffect, useState } from "react";
import { MovieListContext } from "../../main";
import MoviePlayListSpecific from "./MoviePlayListSpecific";


const MoviePlayList = () => {

     const [MoviePlayList , setMoviePlayList]=useState([])
     const [movieListValue, setMovieListValue]=useContext(MovieListContext)
     useEffect(()=> {
        fetch("http://localhost:5000/getAllSong")
        .then(res => res.json())
        .then(data=> setMoviePlayList(data))
    },[movieListValue])
//    console.log(MoviePlayList);
// 
// 
    return (
        <div className="lg:w-1/2 lg:mx-auto bg-[#7F5283]  rounded-md p-5 h-[500px] overflow-y-auto ">
           {
            MoviePlayList && MoviePlayList.map((item, index)=> <MoviePlayListSpecific
            key={item?._id}
            item={item}
            >

            </MoviePlayListSpecific>)
           }
        </div>
    );
};

export default MoviePlayList;