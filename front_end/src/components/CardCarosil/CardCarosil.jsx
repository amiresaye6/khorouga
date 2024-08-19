import React, { useEffect, useState } from "react";
import { Carousel, Card } from "../ui/cards-carousel";

export function CardCarosil() {
  const [trips, setTrips] = useState([])
  const newData = trips.map(trip => {
    return {
      author: trip.author,
      title: trip.trip_name,
      src: trip.cover_image,
      content: <Places places={trip.places} imgSrc={trip.cover_image} />,
    }
  })
  const cards = newData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));


  const fetchData = () => {
    fetch('http://localhost:1234/api/trips', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('All Trips:', data);
        setTrips(data)
      })
      .catch(error => {
        console.error('Error fetching all trips:', error);
      });

  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Start your next Adventior now.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

export const Places = (props) => {
  const { places, imgSrc } = props;
  console.log(imgSrc)
  return (
    <>
      {places.map((place, index) => {
        return (
          <div
            key={"place" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <p className="font-bold text-neutral-700 dark:text-neutral-200">
                {place.place_name}
              </p>
              <p>{place.location}</p>
              <p>{place.description}</p>
            </p>
            {/*  TO-DO: make the image as the background of each place card with shome shading */}
            <img
              src={place.place_cover_image || imgSrc}
              alt={place.place_name}
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-md"
            />
          </div>
        );
      })}
    </>
  );
};
