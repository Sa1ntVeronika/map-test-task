import React, { useRef } from "react";
import { YMaps, Map, Placemark, Polyline } from 'react-yandex-maps';
import { connect } from 'react-redux'
import { updateCenter, moveMarker } from "../../actions";
import './Map.css'

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        newCenter: center => dispatch(updateCenter(center)),
        markerDraged: (payload) => dispatch(moveMarker(payload))
    }
}

function MapComponent(state) {
    const { markers, newCenter, markerDraged } = state
    const mapRef = useRef(null);

    console.log({state}, 'map')

    

    const onDragEnded = (e, marker) => {
        const latlng = e.originalEvent.target.geometry._coordinates
        const payload = {
            marker: marker,
            latlng: latlng
        }
        markerDraged(payload)
    }

    return (
        <div className = "map">
            <YMaps>
                <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }}
                    width='100%'
                    instanceRef={ref => (mapRef.current = ref)} 
                    onActionEnd={() => { newCenter(mapRef.current.getCenter())}}>
                    {markers.map(marker =>
                        <Placemark geometry={marker.latlng} 
                            key = {marker.id}
                            properties={{
                                hintContent: marker.title,
                                balloonContent: marker.title,
                            }}
                            modules={
                                ['geoObject.addon.balloon', 'geoObject.addon.hint']
                            }
                            options={{
                                draggable: true
                            }} 
                            onDragEnd = {(event) => onDragEnded(event, marker)}/>)
                    }
                    <Polyline geometry={markers.map(marker => marker.latlng)}/>
                </Map>
            </YMaps>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent)