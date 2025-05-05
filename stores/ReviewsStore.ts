import { defineStore } from "pinia";

export const useReviewsStore = defineStore("reviewsStore", () => {
  interface Review {
    text: string;
    author: string;
    rating: number;
    email?: string;
    saveData?: boolean;
  }

  const reviewsArray = ref<Review[]>([
    {
      text: "bomboclap bomboclap bomboclap bomboclap bomboclap bomboclap    bomboclapbomboclap bomboclap bomboclap bomboclap",
      author: "Lilly",
      rating: 5,
    },
    {
      text: "bomboclap 22222222222222222222 bomboclap 22222222222222222222 bomboclap 22222222222222222222 bomboclap 22222222222222222222",
      author: "Mary",
      rating: 3,
    },
    {
      text: "lorem ipsum dolor",
      author: "Milli",
      rating: 1,
    },
    {
      text: "gde merge request",
      author: "Ivan Barinov",
      rating: 4,
    },
    {
      text: "bomboclap bomboclap bomboclap bomboclap bomboclap bomboclap    bomboclapbomboclap bomboclap bomboclap bomboclap",
      author: "Lilly",
      rating: 5,
    },
    {
      text: "bomboclap 22222222222222222222 bomboclap 22222222222222222222 bomboclap 22222222222222222222 bomboclap 22222222222222222222",
      author: "Mary",
      rating: 3,
    },
    {
      text: "lorem ipsum dolor",
      author: "Milli",
      rating: 1,
    },
    {
      text: "gde merge request",
      author: "Ivan Barinov",
      rating: 4,
    },
    {
      text: "bomboclap bomboclap bomboclap bomboclap bomboclap bomboclap    bomboclapbomboclap bomboclap bomboclap bomboclap",
      author: "Lilly",
      rating: 5,
    },
    {
      text: "bomboclap 22222222222222222222 bomboclap 22222222222222222222 bomboclap 22222222222222222222 bomboclap 22222222222222222222",
      author: "Mary",
      rating: 3,
    },
    {
      text: "lorem ipsum dolor",
      author: "Milli",
      rating: 1,
    },
    {
      text: "gde merge request",
      author: "Ivan Barinov",
      rating: 4,
    },
  ]);

  const addToReviews = (review: Review) => {
    reviewsArray.value.push(review);
  };

  return {
    reviewsArray,
    addToReviews,
  };
});
