"use client";
import { IReview } from "@/types";
import { useEffect, useState } from "react";

interface ReviewProps {
  tutorId: string | null;
}

const ShowReview = ({ tutorId }: ReviewProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [reviews, setReviews] = useState<IReview[]>([]); // Store reviews data

  console.log(reviews); // To check the reviews fetched

  useEffect(() => {
    const fetchData = async () => {
      if (!tutorId) {
        setError("Tutor ID is missing.");
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(
          // `https://tutors-server-site.vercel.app/api/review/${tutorId}`
          `http://localhost:5000/api/review/${tutorId}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch reviews: ${response.status}`);
        }

        const data = await response.json();
        setReviews(data.data || []); // Assuming response contains data as a list of reviews
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [tutorId]);

  if (isLoading) {
    return <div>Loading...</div>; // Loading state while data is being fetched
  }

  if (error) {
    return <div className="text-red-500">{error}</div>; // Error message if fetching fails
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">What Our Customer Says</h1>

      {/* Show reviews dynamically */}
      <div className="space-y-4">
        {reviews.length === 0 ? (
          <p>No reviews available.</p> // If no reviews exist
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="border-b pb-4">
              <h2 className="font-semibold">{review.name}</h2>
              <div className="flex items-center text-yellow-500">
                {"★★★★★"}
                <span className="ml-2">{review.review} / 5</span>
              </div>
              <p className="text-gray-600 mt-2">
                {new Date(review.createdAt).toLocaleDateString()}
              </p>
              <p className="mt-2">{review.comment}</p>{" "}
              {/* Displaying the comment */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ShowReview;
