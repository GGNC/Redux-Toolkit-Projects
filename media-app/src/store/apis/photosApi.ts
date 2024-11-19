import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AlbumInterface, PhotoInterface } from "../../api";
import { faker } from "@faker-js/faker";

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["Photo", "AlbumPhoto"],
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        providesTags: (result, _error, album) => {
          const tags = result.map((photo: PhotoInterface) => {
            return { type: "Photo", id: photo.id };
          });
          tags.push({ type: "AlbumPhoto", id: album.id });
          return tags;
        },
        query: (album: AlbumInterface) => {
          return {
            url: "/photos",
            params: {
              albumId: album.id,
            },
            method: "GET",
          };
        },
      }),
      addPhoto: builder.mutation({
        invalidatesTags: (_result, _error, album) => {
          return [{ type: "AlbumPhoto", id: album.id }];
        },
        query: (album: AlbumInterface) => {
          return {
            url: "/photos",
            method: "POST",
            body: {
              albumId: album.id,
              url: faker.image.nightlife(150, 150, true),
            },
          };
        },
      }),
      removePhoto: builder.mutation({
        invalidatesTags: (_result, _error, photo) => {
          return [{ type: "Photo", id: photo.id }];
        },
        query: (photo: PhotoInterface) => {
          return {
            url: `/photos/${photo.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export { photosApi };
export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} = photosApi;
