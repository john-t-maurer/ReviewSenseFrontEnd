import { Movie } from "movie";
/**
 * An interface used to generate tooltips.
 * 
 * @interface
 */
export interface HoverEvent {
    /**The movie the tooltip is hovering over. */
    movie: Movie;

    /**The x-coordinate of the tooltip. */
    x: number;

    /**The y-coordinate of the tooltip. */
    y: number;
}