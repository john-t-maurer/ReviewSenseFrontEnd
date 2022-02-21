import { Review } from "./review";

export const REVIEWS: Review[] = [
    {
        review_id: "1",
        name: "John Smith",
        date: "2/6/22",
        title: "Absolutely terrible!",
        review: "Probably one of the worst movies I've seen in a long time. Man is it bad.",
        sentiment: -0.5
    },

    {
        review_id: "2",
        name: "Mike Summers",
        date: "2/7/22",
        title: "Wonderful.",
        review: "This movie was absolutely life changing. Wow. I'm amazed.",
        sentiment: 0.3
    },

    {
        review_id: "3",
        name: "Jane Doe",
        date: "2/6/22",
        title: "The worst...",
        review: "Do not watch this movie.",
        sentiment: -0.4
    }
];

export const REVIEW_TOKENS: string[] = ["Terrible", "Horrible", "Bad", "So bad it's good"];
export const OVERALL_SENTIMENT: number = -0.6;