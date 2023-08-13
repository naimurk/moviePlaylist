import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { data } from "autoprefixer";
import useAddedPlaylistBySpecificUser from "../../Hooks/useAddedPlaylistBySpecificUser";
import { MovieListContext } from "../../main";

const AddPlayList = () => {
    const { user } = useContext(AuthContext)
    const [addedPlayLists,refetch]=useAddedPlaylistBySpecificUser()
    const [movieListValue, setMovieListValue]=useContext(MovieListContext)

    const handleAddPlayList = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const playListName = form.playListName.value;
        const playlistType=form.playlistType.value;

        const body = {
            name,
            email,
            playListName,
            song: [],
            playlistType:playlistType
        }
        //    add playlist api
        fetch("http://localhost:5000/addPlayList", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(body)

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    form.reset()
                    refetch()
                    setMovieListValue(!movieListValue)
                }
            })
    }
    return (
        user && <div className=" flex justify-center">

            <form onSubmit={handleAddPlayList} className="w-full max-w-xs border-2 bg-[#FEFBF6] p-5 flex flex-col justify-center" action="">
                {/* input field one */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input readOnly value={user && user?.displayName} name="name" type="text" required placeholder="Name" className="input input-bordered w-full max-w-xs" />
                </div>

                {/* input field two */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" readOnly value={user && user?.email} type="email" required placeholder="Email" className="input input-bordered w-full max-w-xs" />
                </div>

                {/* input field for playlist name */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Playlist Name</span>
                    </label>
                    <input name="playListName" type="text" required placeholder="Playlist Name" className="input input-bordered w-full max-w-xs" />
                </div>

                {/* Radio buttons for playlist type */}
                <div className="form-control py-3 w-full max-w-xs pt-4">
                    <label className="label">
                        <span className="label-text">Playlist Type</span>
                    </label>
                    <div className="flex space-x-4 mt-2">
                        <label className="radio mx-4">
                            <input type="radio" name="playlistType" required value="public" className="radio-input" />
                            <span className="radio-label ml-1 mx-2">Public</span>
                        </label>
                        <label className="radio mx-4">
                            <input type="radio" name="playlistType" required value="private" className="radio-input" />
                            <span className="radio-label ml-1">Private</span>
                        </label>
                    </div>
                </div>


                <input className="px-5 py-2 bg-[#7F5283] rounded-md text-[#FEFBF6] mt-4 cursor-pointer" type="submit" value="SignUp" />
            </form>

        </div>
    );
};

export default AddPlayList;