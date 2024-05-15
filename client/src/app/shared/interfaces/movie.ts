export interface Movie {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  genres: string[];
  year: number;
  director: string;
  actors: string[];
  full_cover: string;
  hero?: boolean
}
