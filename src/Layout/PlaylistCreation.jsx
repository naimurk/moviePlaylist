import Navbar from "../Component/Navbar/Navbar";
import AddPlayList from "../PlayListCreation-Component/AddPlayList/AddPlayList";
import AddedPlayList from "../PlayListCreation-Component/AddedPlayList/AddedPlayList";


const PlaylistCreation = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex px-5 lg:px-16 flex-col-reverse mt-16 lg:flex-row">
                <div className=" my-5 lg:w-1/2"><AddPlayList></AddPlayList></div>
                <div className=" my-5 lg:w-1/2"><AddedPlayList></AddedPlayList></div>
            </div>
        </div>
    );
};

export default PlaylistCreation;