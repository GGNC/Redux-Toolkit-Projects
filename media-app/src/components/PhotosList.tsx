import { useMemo } from "react";
import { AlbumInterface, PhotoInterface } from "../api";
import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import PhotosListItem from "./PhotoListItem";

interface PhotosListProps {
  album: AlbumInterface;
}
function PhotosList({ album }: PhotosListProps) {
  const { data, isFetching, error } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();
  const handleAddPhoto = () => {
    addPhoto(album);
  };
  const renderedPhotos = useMemo(() => {
    if (typeof data !== "object") return null;
    const tempPhotos = data.map((photo: PhotoInterface) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
    return tempPhotos;
  }, [data]);
  return (
    <>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos in {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
          + Add Photo
        </Button>
      </div>
      <>
        {isFetching ? (
          <div className="mx-8 flex items-center justify-center gap-8">
            <Skeleton className="w-24 h-24 m-2" amount={1} />
            <Skeleton className="w-24 h-24 m-2" amount={1} />
            <Skeleton className="w-24 h-24 m-2" amount={1} />
            <Skeleton className="w-24 h-24 m-2" amount={1} />
          </div>
        ) : error ? (
          <div>Error fetching photos</div>
        ) : (
          <div className="mx-8 flex flex-row flex-wrap justify-center">
            {renderedPhotos}
          </div>
        )}
      </>
    </>
  );
}
export default PhotosList;
