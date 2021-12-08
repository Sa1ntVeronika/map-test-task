import React, { useState, useRef, useEffect } from "react";
import { YMaps, Map, Placemark } from 'react-yandex-maps';


function MapComponent() {

    const [markers, setMarker] = useState([]);
    const mapRef = useRef(null);
    const markerRef = useRef(null)
    const [value, setValue] = useState('');
    const [id, setID] = useState(0)

    const Cons = (event) => {
        event.preventDefault()
        try {
            if (value) {
                const center = mapRef.current.getCenter()
                const marker = {
                    title: value,
                    latlng: center,
                    idx: id
                }
                setMarker([...markers, marker])
                setValue('');
                setID(id+1)
            }
        } catch (e) {

        }

    }

    const onDragEnded = () => {
        console.log(markerRef.current.geometry._coordinates)
    }

    const onValueChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div>
            <YMaps>
                <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }}
                    width="100%"
                    instanceRef={ref => (mapRef.current = ref)} >
                    {markers.map(marker =>
                        <Placemark geometry={marker.latlng} 
                            key = {marker.idx}
                            instanceRef = {ref => (markerRef.current = ref)}
                            properties={{
                                hintContent: marker.title,
                                balloonContent: 'Stack Overflow на русском',

                            }}
                            modules={
                                ['geoObject.addon.balloon', 'geoObject.addon.hint']
                            }
                            options={{
                                draggable: true
                            }} 
                            onDragEnd = {onDragEnded}/>)
                    }
                </Map>
            </YMaps>
            <div className="add-form">
                <h4>Введите название маркера</h4>
                <form onSubmit={Cons}>
                    <input
                        className="form-control"
                        type="text"
                        value={value}
                        onChange={onValueChange} />
                </form>
            </div>
            <button onClick={Cons}></button>
            <ul className="list-group">
                {markers.map(marker =>
                    <li key = {marker.idx}>
                        <div>{marker.title}</div>
                    </li>)}
            </ul>
        </div>
    )
}

export default MapComponent