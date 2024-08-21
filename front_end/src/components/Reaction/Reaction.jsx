import React, { useState } from "react";
import toast from "react-hot-toast";

export const Reactions = ({ tripId, reactions }) => {
  const [count, setCount] = useState(reactions);
  const [liked, setLiked] = useState(false);

  const handleToggle = async (event) => {
    event.stopPropagation(); // Prevent the outer button's click event

    const newCount = liked ? count - 1 : count + 1;
    setCount(newCount);
    setLiked(!liked);

    const token = localStorage.getItem('token');
    console.log(tripId)
    const res = await fetch(`http://localhost:1234/api/trips/reactions/${tripId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        rating: newCount,
      }),
    });

    if (res.ok) {
      toast.success('Thanks');
    } else {
      toast.error('Oops');
      const data = await res.json();
      console.log(data)
    }
  };

  return (
    <div className="z-50 absolute bottom-4 right-4 flex items-center space-x-2">
      <button
        onClick={handleToggle}
        className={`text-2xl ${liked ? "text-red-500" : "text-gray-400"}`}
      >
        ♥
      </button>
      <span className="ml-2 text-white">{count}</span>
    </div>
  );
};
