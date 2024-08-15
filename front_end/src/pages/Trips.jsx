import React, { useState } from 'react'
// import CustomCursorCard from '../components/CustomCursor/CustomCursorCard';
import CustomCursor from '../components/TripCardWithCursor/CustomCursor';
import TripCard from '../components/TripCardWithCursor/TripCard';

function Trips() {
    const [cursorVisible, setCursorVisible] = useState(false);

    const handleMouseEnter = () => {
        setCursorVisible(true);
    };

    const handleMouseLeave = () => {
        setCursorVisible(false);
    };
    return (
        <div className="relative">
            <CustomCursor isVisible={cursorVisible} />
            <div className="h-screen text-center py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">

                        <TripCard
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />

                        <TripCard
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />

                        <TripCard
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />

                        <TripCard
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />

                        <TripCard
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />

                        <TripCard
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />

                        <TripCard
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />

                        <TripCard
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />

                        <TripCard
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                </div>
            </div>
        </div>
    )
}

export default Trips;
