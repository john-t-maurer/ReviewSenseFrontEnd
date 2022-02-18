import { Review } from "./review";

export const REVIEWS: Review[] = [
    {
        review_id: "1",
        reviewer: "John Smith",
        movie_id: 1,
        rating: 1,
        review_summary: "Absolutely terrible!",
        review_date: "2/6/22",
        review_detail: "Probably one of the worst movies I've seen in a long time. Man is it bad."
    },

    {
        review_id: "2",
        reviewer: "Mike Summers",
        movie_id: 1,
        rating: 1,
        review_summary: "Wonderful.",
        review_date: "2/7/22",
        review_detail: "This movie was absolutely life changing. Wow. I'm amazed."
    },

    {
        review_id: "3",
        reviewer: "Jane Doe",
        movie_id: 1,
        rating: 1,
        review_summary: "The worst...",
        review_date: "2/6/22",
        review_detail: "Do not watch this movie."
    }
];