const initialState = {
    mapCenter: [55.75, 37.57],
    markers: [],
    id: 1
}

const updateCenter = (state, center) => {
    return {
        ...state,
        mapCenter: center
    }
}
const createMarker = (state, title) => {
    const newMarker = {
        title: title,
        latlng: state.mapCenter,
        id: state.id
    }
    return {
        ...state,
        markers: [...state.markers, newMarker],
        id: state.id+1
    }
}

const moveMarker = (state, payload) => {
    const idx = state.markers.findIndex((el) => el.id === payload.marker.id)
    let newMarker = {...payload.marker, latlng: payload.latlng }
    return {
        ...state,
        markers: [
            ...state.markers.slice(0, idx),
            newMarker,
            ...state.markers.slice(idx + 1)
        ]
    }
}

const deleteMarker = (state, marker) => {
    console.log(123)
    const idx = state.markers.findIndex((el) => el.id === marker.id)
    return {
        ...state,
        markers: [
            ...state.markers.slice(0, idx),
            ...state.markers.slice(idx + 1)
        ]
    }
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CREATE_MARKER':
            return createMarker(state, action.payload)
        case 'MOVE_MARKER':
            return moveMarker(state, action.payload)
        case 'UPDATE_CENTER':
            return updateCenter(state, action.payload)
        case 'DELETE_MARKER':
            return deleteMarker(state, action.payload)
        default:
            return state
    }
}

export default reducer