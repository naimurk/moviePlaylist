import useAddedPlaylistBySpecificUser from "../../Hooks/useAddedPlaylistBySpecificUser";
import SpecificAddedPlayList from "../SpecificAddedPlaylist/SpecificAddedPlayList";


const AddedPlayList = () => {
    const [addedPlayLists,refetch]=useAddedPlaylistBySpecificUser()
    // console.log(addedPlayLists);
    return (
        <div className="grid grid-cols-1 items-center justify-center gap-6 lg:grid-cols-2">
            {
                addedPlayLists && addedPlayLists.map((item,index)=><SpecificAddedPlayList
                item={item}
                key={item?._id}
                ></SpecificAddedPlayList>)
            }
        </div>
    );
};

export default AddedPlayList;