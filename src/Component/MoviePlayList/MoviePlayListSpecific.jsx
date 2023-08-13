import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MoviePlayListSpecificSong from "./MoviePlayListSpecificSong";

const MoviePlayListSpecific = ({item}) => {
    // console.log(item);
    const {email,song, playlistType,playListName }=item
    const {user}=useContext(AuthContext)
    return (
      
         <div  tabIndex={0}  className={` ${!user && (playlistType=="private")? "disabled":""} collapse my-3 collapse-arrow border border-base-300 bg-[#A6D1E6]`}>
        <div className="collapse-title text-xl font-medium">
          {
            playListName
          }
        </div>
        <div className="collapse-content"> 
        {
            song && song.map((item,index)=> <MoviePlayListSpecificSong
            key={item?.id}
            index={index}
            item={item}
            ></MoviePlayListSpecificSong>)
          }
        </div>
      </div>
       
    )
};

export default MoviePlayListSpecific;