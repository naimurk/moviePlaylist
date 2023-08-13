import { useContext, useEffect, useState } from "react";
import { MovieBannerContext } from "../../main";


const MovieBanner = () => {

    const [movieBannerValue, setMovieBannerValue] = useContext(MovieBannerContext)
    const [movieBannerData, setMovieBannerData] = useState({})
    const [movieBannerDataFinal, setMovieBannerDataFinal] = useState({})
    // console.log(movieBannerValue);

    useEffect(() => {
        fetch(`http://localhost:5000/movieBanner?playListId=${movieBannerValue?.playListId}&id=${movieBannerValue?.id}`)
            .then(res => res.json())
            .then(data => setMovieBannerData(data))
    }, [movieBannerValue])
    // console.log(movieBannerValue);

    useEffect(() => {
        if (movieBannerData.song) {
            const songArray = movieBannerData.song.find((item, index) => item.id == movieBannerValue.id);
            setMovieBannerDataFinal(songArray)
        }
    }, [movieBannerData])
    //    console.log(movieBannerData.song);
    // console.log(movieBannerDataFinal);
    return (
        <div className="flex flex-col gap-6  lg:flex-row">

            <div className="movieBanner  lg:w-1/2 h-[400px]">
                <img className="w-[900px] h-[400px]" src={movieBannerDataFinal.photoUrl} alt="" />

            </div>

            <div className="movieDescription  lg:w-1/2 h-[400px] ">
                <h1 className=""><span className="text-xl lg:text-3xl font-bold">Movie Name</span> : <span className="text-xl mx-3 lg:text-3xl">{movieBannerDataFinal.name}</span></h1>
                <p className=""><span className="text-xl lg:text-3xl font-bold">Producer Name</span> : <span className="text-xl  mx-3 lg:text-3xl">{movieBannerDataFinal.producerName}</span></p>
                <p className=""><span className="text-xl lg:text-3xl font-bold">Release Date</span> : <span className="text-xl  mx-3 lg:text-3xl">{movieBannerDataFinal.date}</span></p>
                <p className=""><span className="text-xl lg:text-3xl font-bold">Movie Description</span> : <span className="text-xl  mx-3 lg:text-xl">{movieBannerDataFinal.description}</span></p>
            </div>
        </div>
    );
};

export default MovieBanner;