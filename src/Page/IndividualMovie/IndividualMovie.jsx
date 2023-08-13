import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const IndividualMovie = () => {

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    const playListId = queryParams.get('playListId');
   
    const [data , setData]=useState([])
    const [finalData ,setFinalData]= useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/movieBanner?playListId=${playListId}&id=${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [location,queryParams,id,playListId])
    // console.log(movieBannerValue);

    useEffect(() => {
        if (data.song) {
            const songArray = data.song.find((item, index) => item.id == id);
            setFinalData(songArray)
        }
    }, [data])
    
    console.log(finalData);
    return (
        <div className="flex flex-col gap-6  lg:flex-row">
            

        <div className="movieBanner  lg:w-1/2 h-[400px]">
            <img className="w-[900px] h-[400px]" src={finalData?.photoUrl} alt="" />

        </div>

        <div className="movieDescription  lg:w-1/2 h-[400px] ">
            <h1 className=""><span className="text-xl lg:text-3xl font-bold">Movie Name</span> : <span className="text-xl mx-3 lg:text-3xl">{finalData?.name}</span></h1>
            <p className=""><span className="text-xl lg:text-3xl font-bold">Producer Name</span> : <span className="text-xl  mx-3 lg:text-3xl">{finalData?.producerName}</span></p>
            <p className=""><span className="text-xl lg:text-3xl font-bold">Release Date</span> : <span className="text-xl  mx-3 lg:text-3xl">{finalData?.date}</span></p>
            <p className=""><span className="text-xl lg:text-3xl font-bold">Movie Description</span> : <span className="text-xl  mx-3 lg:text-xl">{finalData?.description}</span></p>
        </div>
    </div>
    );
};

export default IndividualMovie;