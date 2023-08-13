import { useContext } from "react";
import { MovieBannerContext } from "../../main";


const MoviePlayListSpecificSong = ({item}) => {

    const {name,photoUrl,producerName,id,date,description,playListId}=item;
    const [movieBannerValue, setMovieBannerValue]=useContext(MovieBannerContext)
    const handleClick = ()=> {

        const movieBannerObj = {
           name,photoUrl,id,date,description,producerName,playListId
        }
        setMovieBannerValue(movieBannerObj)
       }
    return (
        <div className="my-3 p-3 bg-[#7F5283] text-[#FEFBF6] rounded-md cursor-pointer"  onClick={handleClick}>
            <p>{name}</p>
        </div>
    );
};

export default MoviePlayListSpecificSong;