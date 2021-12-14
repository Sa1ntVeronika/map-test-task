export const createMarker = (marker) => {
    return {
        type: 'CREATE_MARKER',
        payload: marker
    }
}

export const moveMarker = (marker) => {
    return {
        type: 'MOVE_MARKER',
        payload: marker
    }
}
export const updateCenter = (center) => {
    return {
        type: 'UPDATE_CENTER',
        payload: center
    }
}
export const deleteMarker = (marker) => {
    return {
        type: 'DELETE_MARKER',
        payload: marker
    }
}
