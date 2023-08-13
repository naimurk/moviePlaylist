import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MoviePlayListSpecificSong from "./MoviePlayListSpecificSong";


const MoviePlayListSpecific = ({ item }) => {
  // console.log(item);
  const { email, song, playlistType, playListName } = item;
  const { user } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false); // State to manage accordion item's open/close status

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (

  

  <div className={`bg-[#A6D1E6]  p-3 my-4 ${!user && (playlistType=="private")? "disabled": ""}`}>
      <h1 className="cursor-pointer" onClick={  toggleAccordion} >{playListName}</h1>
      
        {
          isOpen && <div className="my-3">
          {
          
          song?.map((item,index)=> <MoviePlayListSpecificSong
          key={item?.id}
          index={index}
          item={item}
          ></MoviePlayListSpecificSong>)
         
       }
       </div>
        }
      
  </div>
   
  );
    




  
};

export default MoviePlayListSpecific;