
/**
 * Represents a movie from the database.
 * 
 * @interface
 */
export interface Movie {
    /**A unique identifier for a movie. */
    ref_num: number;

    /**The title of the movie. */
    name: string;

    /**A URL that points to a movie's poster artwork. */
    poster_url: string;

    /**The description of the movie. */
    overview: string;
}
