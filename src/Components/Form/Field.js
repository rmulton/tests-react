import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import update_field from '../../action_creator/update_field'
import {connect} from 'react-redux'


class Field extends Component{
    constructor(props){
        super(props)
        this.state = {
            type: props.type,
            label: props.label
        }
    }

    updateField(e){
        const content = e.target.value
        console.log('updateField: ', content)
        return this.props.update_field(content, this.props.content)
    }

    renderTextArea(){
        return(
            <div>
                <label>{this.state.label}</label>
                <input onChange={this.updateField.bind(this)}></input>
                <p>{this.props.content[0]}</p>
            </div>
        )
    }

    renderButton(){
        return(
            <div>
                <button>{this.state.label}</button>
            </div>
        )
    }

    render(){
        switch(this.state.type){
            case 'one_line': return this.renderTextArea()
            case 'button': return this.renderButton()
        }
    }
}

function mapDispatchToProps(dispatch){
    return(
        bindActionCreators({update_field}, dispatch)
    )
}

function mapStateToProps(state){
    return(
        {
            content: state.update_field
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Field)
