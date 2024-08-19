import React, { useState } from "react";
import toast from "react-hot-toast";

export const Reactions = (props) => {
  const [count, setCount] = useState(props.reactions);
  const [liked, setLiked] = useState(false);

  const handleToggle = async () => {
    const newCount = liked ? count - 1 : count + 1;
    setCount(newCount);
    setLiked(!liked);

    const token = localStorage.getItem('token');
    const res = await fetch(`http://localhost:1234/api/trips/${props.tripId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        rating: count,
      }),
    });

    if (res.ok) {
      toast.success('Thanks');
    } else {
      toast.error('oops');
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


