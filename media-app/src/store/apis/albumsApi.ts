import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AlbumInterface, UserInterface } from "../../api";
import { faker } from "@faker-js/faker";


const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["Album", "UsersAlbum"],
  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        providesTags: (result, _error, user) => {
          const tags = result.map((album: AlbumInterface) => {
            return { type: "Album", id: album.id };
          });
          tags.push({ type: "UsersAlbum", id: user.id });
          return tags;
        },
        query: (user: UserInterface) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
      addAlbum: builder.mutation({
        invalidatesTags: (_result, _error, user) => {
          return [
            {
              type: "UsersAlbum",
              id: user.id,
            },
          ];
        },
        query: (user: UserInterface) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              userId: user.id,
              title: faker.music.songName(),
            },
          };
        },
      }),
      removeAlbum: builder.mutation({
        invalidatesTags: (_result, _error, album) => {
          return [{ type: "Album", id: album.id }];
        },
        query: (album: AlbumInterface) => {
          return {
            url: `/albums/${album.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export { albumsApi };
export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;
