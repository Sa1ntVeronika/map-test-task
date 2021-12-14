import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { deleteMarker } from '../../actions'
import './MarkerList.css'

const mapStateToProps =(state) =>{
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: marker => dispatch(deleteMarker(marker))
    }
}

const MarkerList =( {markers, onClick} ) => {
    return (
        <ul className="list-group">
                {markers.map((marker, index) =>
                    <li key = {marker.id} className="list-group-item item" >
                        <div>
                            <h2>{index+1}. {marker.title}</h2>
                            <button className="btn btn-outline-danger" 
                                 onClick={()=>onClick(marker)}>Удалить</button>
                        </div>
                    </li>)}
            </ul>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkerList)