import { PhotoInterface } from "../api";
import { GoTrashcan } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

interface PhotosListItemProps {
  photo: PhotoInterface;
}
function PhotosListItem({ photo }: PhotosListItemProps) {
  const [removePhoto] = useRemovePhotoMutation();
  const handleRemovePhoto = () => {
    removePhoto(photo);
  };
  return (
    <div onClick={handleRemovePhoto} className="relative m-2 cursor-pointer">
      <img className="w-24 h-24" src={photo.url} alt="random image" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrashcan size={40} />
      </div>
    </div>
  );
}
export default PhotosListItem;
