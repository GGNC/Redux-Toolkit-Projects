import { UserInterface } from "../api";

interface AlbumsListProps{
    user : UserInterface
}
function AlbumsList({user}:AlbumsListProps){
    return(
        <div>
            Albums for {user.name}
        </div>
    )
}
export default AlbumsList;