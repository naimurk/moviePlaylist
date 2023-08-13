import { useContext } from "react";
import { MovieBannerContext } from "../../main";

const SpecificMovieListF = ({item}) => {
    
    const {name,photoUrl,producerName,id,date,description,playListId}=item
    // console.log(item);
    console.log(id,playListId);
    const [movieBannerValue, setMovieBannerValue]=useContext(MovieBannerContext)

    const handleClick = ()=> {

     const movieBannerObj = {
        name,photoUrl,id,date,description,producerName,playListId
     }
     setMovieBannerValue(movieBannerObj)
    }
    return (
        <div className="flex flex-col p-5 my-5 lg:flex-row gap-x-2 items-center">
            <div className="lg:w-1/2"><img className="w-[400px] h-[300px]" src={photoUrl} alt="" /></div>
            <div className="lg:w-1/2">
                <h1 className="text-3xl">{name}</h1>
                <p className="py-3">{description}</p>
                <button onClick={handleClick} className="btn text-white bg-[#7F5283]">Click Here</button>
            </div>
        </div>
    );
};

export default SpecificMovieListF;