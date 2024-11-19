export interface UserInterface {
  id: number;
  name: string;
}

export interface AlbumInterface {
  id: number;
  userId: number;
  title: string;
}
export interface PhotoInterface {
  id: number;
  albumid: number;
  url: string;
}
