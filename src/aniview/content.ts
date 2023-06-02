export interface AniviewResponse<T> {
  data: T;
  errors?: Error[];
}

export interface RegisterLinks {
  registerLinks?: { id: string }[];
}
export type RegisterLinksResponse = AniviewResponse<RegisterLinks>;

export interface GetVideos {
  videos: { paginatorInfo: object; data: Content[] };
}
export type GetVideosResponse = AniviewResponse<GetVideos>;

export interface UpdateVideo {
  updateVideo: { id: string };
}
export type UpdateVideoResponse = AniviewResponse<UpdateVideo>;

export interface DeleteVideos {
  archiveVideo: { id: string }[];
}
export type DeleteVideosResponse = AniviewResponse<DeleteVideos>;

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
  poster: { status: string };
};
