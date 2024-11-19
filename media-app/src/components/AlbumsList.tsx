import { useMemo } from "react";
import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import { AlbumInterface, UserInterface } from "../api";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumListItem from "./AlbumListItem";

interface AlbumsListProps {
  user: UserInterface;
}
function AlbumsList({ user }: AlbumsListProps) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const renderedAlbums = useMemo(() => {
    if (typeof data !== "object") return null;
    const tempAlbums = data.map((album: AlbumInterface) => {
      return <AlbumListItem key={album.id} album={album} />;
    });
    return tempAlbums;
  }, [data]);

  const handleAddAlbum = () => {
    addAlbum(user);
  };
  return (
    <>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums by {user.name}</h3>
        <Button loading={results.isLoading} onClick={handleAddAlbum}>
          + Add Album
        </Button>
      </div>
      <>
        {isFetching ? (
          <Skeleton className="h-10 w-full" amount={2} />
        ) : error ? (
          <div>Error loading albums...</div>
        ) : (
          <div>{renderedAlbums}</div>
        )}
      </>
    </>
  );
}
export default AlbumsList;
