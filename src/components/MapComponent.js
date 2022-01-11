import React, { useState } from 'react'
import '../App.css'
import { GoogleMap, Marker } from '@react-google-maps/api';


function MapComponent() {

    const [lat, setLat] = useState(23.811056)
    const [lng, setLng] = useState(90.407608)

    const containerStyle = {
        width: '100%',
        height: '600px'
    };

    const position = {
        lat: lat,
        lng: lng
    };

    return (
        <div className='App'>
            <form className='Form'>
                <label style={{ margin: "10px" }}>
                    Latitude:
                    <input type="number" value={lat} onInput={e => setLat(Number(e.target.value))} />
                </label>
                <label>
                    Longitude:
                    <input type="number" value={lng} onInput={e => setLng(Number(e.target.value))} />
                </label>
            </form>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={position}
                zoom={15}
                onClick={e => {
                    console.log("latitide = ", e.latLng.lat());
                    console.log("longitude = ", e.latLng.lng());
                    setLat(Number(e.latLng.lat()))
                    setLng(Number(e.latLng.lng()))

                }}
            >
                <Marker
                    position={position}
                    draggable={true}
                    onDragEnd={e => {
                        setLat(Number(e.latLng.lat()))
                        setLng(Number(e.latLng.lng()))
                    }}
                />
            </GoogleMap>
        </div>
    )
}

export default React.memo(MapComponent)
