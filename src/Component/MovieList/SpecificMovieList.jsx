import SpecificMovieListF from "./SpecificMovieListF";


const SpecificMovieList = ({item}) => {
    const {_id , song, playListName,name,email}=item
    return (
        <div>
            {
                song && song.map((item,index)=> <SpecificMovieListF
                item={item}
                key={item?.id}
                ></SpecificMovieListF>)
            }
        </div>
    );
};

export default SpecificMovieList;