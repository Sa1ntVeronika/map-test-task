import React, { Component } from 'react'
import  { createMarker } from '../../actions'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    ...state
})



const mapDispatchToProps = dispatch => ({
    submit: value => dispatch(createMarker(value))
})


class Input extends Component{

    state = {
        value: ''
    }

    onValueChange = e => {
        this.setState({
            value: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.submit(this.state.value)
        this.setState({
            value:''
        })
    }

    render () {
        return (
        <div className="add-form">
                <h4>Введите название маркера</h4>
                <form onSubmit={this.onSubmit}>
                    <input
                        className="form-control"
                        type="text"
                        value={this.state.value}
                        onChange={this.onValueChange} />
                </form>
            </div>
    )}
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)