import { Movie } from "movie";

export interface HoverEvent {
    movie: Movie;
    x: number;
    y: number;
}