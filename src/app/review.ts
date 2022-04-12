
/**
 * Represents a review from the database.
 * 
 * @interface
 */
export interface Review {
    /**A unique identifier for a review. */
    review_id: string;

    /**The name of the author of the review. */
    name: string;

    /**The date in which the review was written. */
    date: string;

    /**The title of the review. */
    title?: string;

    /**The review text in entirety. */
    review: string;

    /**The sentiment score of the review. */
    sentiment: number;
}
