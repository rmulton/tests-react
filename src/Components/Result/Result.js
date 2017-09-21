import React, { Component } from 'react';
import Line from './Line'
import {connect} from 'react-redux'

class Result extends Component{
    constructor(props){
        super(props)
        this.state = {
            lines: []
        }
    }

    renderLines(line, i){
        return(
            <Line first_name={line.first_name} last_name={line.last_name} email={line.email} key={i}></Line>
        )
    }

    render(){
        return(
        <div>
            {this.state.lines.map(this.renderLines)}
        </div>
        )
    }
}

function mapStateToProps(state){
    return(
        {
            lines: state.update_fields
        }
    )
}

export default connect(mapStateToProps)(Result)