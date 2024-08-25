import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MyMap = () => {
    const [position, setPosition] = useState(null);

    useEffect(() => {
        const success = (position) => {
            setPosition({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            });
        };

        const error = () => {
            console.error('Error getting current location');
        };

        navigator.geolocation.getCurrentPosition(success, error);
    }, []);

    return (
        <LoadScript
            googleMapsApiKey="YOUR_API_KEY"
            libraries="places"
        >
            <GoogleMap
                mapContainerClassName="map-container"
                center={position}
                zoom={15}
            >
                {position && (
                    <Marker position={position} />
                )}
            </GoogleMap>
        </LoadScript>
    );
};

export default MyMap;