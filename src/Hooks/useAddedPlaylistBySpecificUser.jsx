import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../AuthProvider/AuthProvider";


const useAddedPlaylistBySpecificUser = () => {

    const {user,loading} = useContext(AuthContext)
    const {data : addedPlayLists = [],refetch } = useQuery({
        queryKey : ['addedPlayLists'],
        queryFn : async () => {
            const response = await fetch(`http://localhost:5000/addedPlayList/${user?.email}`)
            return response.json()
        },
        enabled : !loading && !!user?.email
    })
    return [addedPlayLists,refetch]
};

export default useAddedPlaylistBySpecificUser;