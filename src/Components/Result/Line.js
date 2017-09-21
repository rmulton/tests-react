import React, { Component } from 'react';

class Line extends Component{
    constructor(props){
        super(props)
        this.state = {
            first_name: this.props.first_name,
            last_name: this.props.last_name,
            email: this.props.email
        }
    }

    render(){
        return(
        <div>
            {this.state.first_name} {this.state.last_name} {this.state.email}
        </div>
        )
    }
}

export default Line