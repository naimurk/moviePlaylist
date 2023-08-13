import MovieBanner from "../Component/MovieBanner/MovieBanner";
import MovieList from "../Component/MovieList/MovieList";
import MoviePlayList from "../Component/MoviePlayList/MoviePlayList";
import Navbar from "../Component/Navbar/Navbar";


const Home = () => {
    return (
        <div  className="">
            <Navbar></Navbar>
            <div className="my-20 px-5 lg:px-16"><MovieBanner></MovieBanner></div>
            <div className="flex px-5 lg:px-16 flex-col-reverse lg:gap-x-12 lg:flex-row">
                <div className="lg:w-1/2"><MovieList></MovieList></div>
                <div className="lg:w-1/2"><MoviePlayList></MoviePlayList></div>
            </div>
        </div>
    );
};

export default Home;