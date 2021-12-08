import React, { useState, useRef, useEffect } from "react";
import { YMaps, Map, Placemark } from 'react-yandex-maps';


function  MapComponent (){

  const [markers, setMarker] = useState([]);
  const mapRef = useRef(null);
  const [value, setValue] = useState('');

  const Cons = (event) => {
      event.preventDefault()
      const center = mapRef.current.getCenter()
      console.log(center, value)
      setMarker([...markers, center])
      console.log(markers)
  }

  const onValueChange = (event) => {
    setValue(event.target.value);
  }

    return (
        <div width="800px">
        <YMaps>
          My awesome application with maps!
          <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} 
                width="100%"
                instanceRef={ref => (mapRef.current = ref)} >
                {markers.map(marker =>
                    <Placemark geometry={marker}
                                properties={{
                                    hintContent: 'Stack Overflow',
                                    balloonContent: 'Stack Overflow на русском',
                                    
                                }}
                                modules={
                                    ['geoObject.addon.balloon', 'geoObject.addon.hint']
                                }/>)
                    }
          </Map>
      </YMaps>
      <div className="add-form">
      <h4>Введите название маркера</h4>
      <form onSubmit = {Cons}>
        <input 
          className="form-control"
          type="text" 
          value={value}
          onChange={onValueChange}/>
      </form>
        </div>
            <button onClick = {Cons}></button>
            <ul className="list-group">
        {markers.map(marker=> 
            <li>
                <div>{marker[0]}</div>
            </li>)}
        </ul>
      </div>
    )
  }

export default MapComponent