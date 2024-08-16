import React, { useEffect, useState } from 'react'
import { Card } from '../components/ui/apple-cards-carousel';
import { Places } from '../components/CardCarosil/CardCarosil';
import PaginationButtonsComponent from '../components/PaginationButtonsComponent/PaginationButtonsComponent';

function Trips() {
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
                // Include any other headers if needed (e.g., Authorization)
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
        <div className="relative w-full h-fit" >
            <div className="w-full text-center flex-col py-10 md:py-20 flex justify-center items-center">
            <h1>select your favourit</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 my-5">
                    {cards.map((card, index) => (
                        <div key={`card_${index}`} className="flex justify-center items-center">
                            {card}
                        </div>
                    ))}
                </div>
            </div>
            <PaginationButtonsComponent />
        </div>
    )

}


export default Trips;
