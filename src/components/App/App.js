import React, { Component } from 'react'
import Input from '../Input/Input'
import Map from '../Map/Map'
import MarkerList from '../MarkerList/MarkerList'
import './App.css'

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div>Hi</div>
                <Map />
                <Input></Input>
                <MarkerList></MarkerList>
            </div>
        )
    }
}
