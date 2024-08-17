import React, { useEffect, useState } from 'react'
import PaginationButtonsComponent from '../components/PaginationButtonsComponent/PaginationButtonsComponent';
import toast from 'react-hot-toast';

function Profile() {
    const [myTrips, setMyTrips] = useState([]);
    const fetchMyTrips = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            const response = await fetch(
                'http://localhost:1234/api/trips/me/trips',
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            const data = await response.json();
            setMyTrips(data)
        } else {
            console.log('please log in');
            toast("please login")
            
        }
    }
    useEffect(() => {
        fetchMyTrips()
    }, [])
    return (
        <div className="relative w-full h-fit" >
            <div className="w-full text-center flex-col py-10 md:py-20 flex justify-center items-center">
                <h1>My trips</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 my-5">
                    {
                        myTrips.map(Trip => <h1>{Trip.author}</h1>)
                    }
                </div>
            </div>
            <PaginationButtonsComponent />
        </div>
    )
}

export default Profile;
