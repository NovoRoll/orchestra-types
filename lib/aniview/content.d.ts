import type { Response } from "./common";
export interface RegisterLinks {
  registerLinks?: {
    id: string;
  }[];
}
export type RegisterLinksResponse = Response<RegisterLinks>;
export interface GetVideos {
  videos: {
    paginatorInfo: object;
    data: Content[];
  };
}
export type GetVideosResponse = Response<GetVideos>;
export interface UpdateVideo {
  updateVideo: {
    id: string;
  };
}
export type UpdateVideoResponse = Response<UpdateVideo>;
export interface DeleteVideos {
  archiveVideo: {
    id: string;
  }[];
}
export type DeleteVideosResponse = Response<DeleteVideos>;
export type Content = {
  name: string;
  id: string;
  duration: number;
  createdAt: string;
  updatedAt: string;
  uploadMethod: "LINK";
  status: "active" | "generating" | "error" | "archived";
  description: string | null;
  isRegisterOnly: boolean;
  size: unknown;
  sizeInPlayer: unknown;
  flavors: [];
  history: unknown;
  thumbnail: {
    urlByDimensionKey: string;
    status: string;
  };
  poster: {
    status: string;
  };
};
