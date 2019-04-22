// your Bomb code here!

import React from 'react';

export default class Bomb extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }
    render () {
        return (
            <p>{this.state.secondsLeft ? this.state.secondsLeft + " seconds left before I go boom!" : "Boom!"}</p>
        )
    }
}
