import { useContext, useState } from 'react';
import Modal from 'react-modal';
import useAddedPlaylistBySpecificUser from '../../Hooks/useAddedPlaylistBySpecificUser';
import { MovieListContext } from '../../main';


const SpecificAddedPlayList = ({ item }) => {
    // console.log(item);
    const [movieListValue, setMovieListValue]=useContext(MovieListContext)
    const { _id, email, song, playListName, name } = item;
    const [addedPlayLists,refetch]=useAddedPlaylistBySpecificUser()
    

    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpenTwo, setIsOpenTwo] = useState(false);


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };


    let subtitle;

    function openModal() {
        setIsOpen(true);
    }
    function openModalTwo() {
        setIsOpenTwo(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        //   subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    function closeModalTwo() {
        setIsOpenTwo(false);
    }

  const handleAddSong = (e)=> {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const producerName=form.producerName.value;
    const date = form.date.value;
    const description = form.description.value;

    // console.log(name,photoUrl,producerName,date,description);
    let newSongArray = [...song]

    const newSongObj = {
       name,
       photoUrl,
       producerName,
       date,
       description,
       id: Math.floor(Math.random() * 100001),
       playListName:playListName,
       playListId: _id
    }
    newSongArray.push(newSongObj)

    const body = {
        newSongArray
    }

    fetch(`http://localhost:5000/update-movie/${_id}`,{
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(body)
    })
    .then(res=> res.json())
    .then(data => {
        if(data.modifiedCount>0){
            form.reset();
            closeModal()
            setMovieListValue(!movieListValue)
        }
    })
    
  }

  const handleUpdatePlaylistName= (e)=> {
     e.preventDefault();
     const form = e.target;
     const updatePlaylistName = form.updatePlaylistName.value;
     const newUpdatePlaylistName = {updatePlaylistName}
     fetch(`http://localhost:5000/update-playlistName/${_id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body : JSON.stringify(newUpdatePlaylistName)
     })
     .then(res => res.json())
     .then(data => {
        if(data.modifiedCount>0){
            form.reset()
            refetch()
            closeModalTwo()
            
        }
     })


  }

  const handleDeleteAPlayList = ()=> {
          fetch(`http://localhost:5000/delete/${_id}`,{
            method: "DELETE"
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount>0){
                refetch()
                setMovieListValue(!movieListValue)
            }
          })
  }



    return (
        <div className="p-7 bg-[#A6D1E6]">
            <h1 className="text-xl py-3">Playlist Name : <span className="font-bold">{playListName}</span></h1>
            <div>
                <button onClick={openModalTwo} className="btn bg-[#A6D1E6] my-2 mx-2 border border-[#FEFBF6] ">Update The Playlist Name</button>
                <button onClick={openModal} className="btn bg-[#A6D1E6] my-2 mx-2 border border-[#FEFBF6] ">Add Movie in</button>
                <button onClick={handleDeleteAPlayList} className="btn bg-[#A6D1E6] my-2 mx-2 border border-[#FEFBF6] ">Delete the playlist</button>
            </div>

            {/* first Modal */}
            <div>
                {/* <button onClick={openModal}>Open Modal</button> */}
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
                    <button className='btn' onClick={closeModal}>close</button>

                    <form onSubmit={handleAddSong} className="w-full max-w-xs border-2 bg-[#FEFBF6] p-5 flex flex-col justify-center" action="">
                        {/* input field one */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Movie Name</span>
                            </label>
                            <input name="name" type="text" required placeholder=" movie name" className="input input-bordered w-full max-w-xs" />
                        </div>

                        {/* input field two */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Movie Photo Url</span>
                            </label>
                            <input name="photoUrl" type="url" required placeholder="photo url" className="input input-bordered w-full max-w-xs" />
                        </div>

                        {/* input field for playlist name */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Producer Name</span>
                            </label>
                            <input name="producerName" type="text" required placeholder="Producer Name" className="input input-bordered w-full max-w-xs" />
                        </div>

                        {/* input field for playlist name */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Release Date</span>
                            </label>
                            <input name="date" type="date" required placeholder="Date" className="input input-bordered w-full max-w-xs" />
                        </div>

                        {/* input field for playlist name */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Movie Description</span>
                            </label>
                            <textarea name="description" required placeholder="description" className="textarea textarea-bordered w-full max-w-xs" />
                        </div>




                        <input className="px-5 py-2 bg-[#7F5283] rounded-md text-[#FEFBF6] mt-4 cursor-pointer" type="submit" value="Add Movie" />
                    </form>
                </Modal>
            </div>

            {/* second Modal */}
            <div>
                {/* <button onClick={openModal}>Open Modal</button> */}
                <Modal
                    isOpen={modalIsOpenTwo}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModalTwo}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
                    <button className='btn' onClick={closeModalTwo}>close</button>

                    <form onSubmit={handleUpdatePlaylistName} className="w-full max-w-xs border-2 bg-[#FEFBF6] p-5 flex flex-col justify-center" action="">
                        {/* input field one */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">update Playlist Name</span>
                            </label>
                            <input name="updatePlaylistName" type="text" required placeholder=" Update Playlist Name" className="input input-bordered w-full max-w-xs" />
                        </div>


                        <input className="px-5 py-2 bg-[#7F5283] rounded-md text-[#FEFBF6] mt-4 cursor-pointer" type="submit" value="update the Playlist" />
                    </form>
                </Modal>
            </div>


        </div>
    );
};

export default SpecificAddedPlayList;