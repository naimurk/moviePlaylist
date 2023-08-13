import { useContext, useState } from "react";
import { MovieBannerContext } from "../../main";
import { Link } from "react-router-dom";
import { CopyToClipboard } from 'react-copy-to-clipboard';


const MoviePlayListSpecificSong = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [copied , setCopied]=useState(false)
    
    const { name, photoUrl, producerName, id, date, description, playListId } = item;
    const [movieBannerValue, setMovieBannerValue] = useContext(MovieBannerContext)
    const [value , setValue]=useState(`http://localhost:5173/movie?id=${id}&playListId=${playListId}`);
    const handleClick = () => {

        const movieBannerObj = {
            name, photoUrl, id, date, description, producerName, playListId
        }
        setMovieBannerValue(movieBannerObj)
    }



    const queryParams = {
        id: movieBannerValue?.id,
        playListId: movieBannerValue?.playListId
    }


    const to = {
        pathname: "/movie",
        search: new URLSearchParams(queryParams).toString(),

    }



    return (
        <div className="my-3  p-3 bg-[#7F5283] text-[#FEFBF6] rounded-md cursor-pointer" onClick={handleClick}>
            <p className="font-medium">{name}</p>
            
            <button className="btn mt-2 btn-sm" onClick={() => setIsOpen(!isOpen)}>Copy Link</button>
            {
                isOpen && <div>
                    <input
                        className="text-black"
                        value={value}
                        type="text"
                        readOnly  // Make the input read-only to prevent user input
                    />
                    <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
                        <button className="btn">Copy</button>
                    </CopyToClipboard>
                </div>
            }
        </div>
    );
};

export default MoviePlayListSpecificSong;