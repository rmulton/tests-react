import React, { Component } from 'react';
import Field from './Field.js'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import submit from '../../action_creator/submit'
import update_field from '../../action_creator/update_field'

class Form extends Component {
   constructor(props){
       super(props)
       this.state = {
           fields: [
               {
                   type: 'one_line',
                   label: 'first_name'
               },
               {
                   type: 'one_line',
                   label: 'last_name'
               },
               {
                   type: 'one_line',
                   label: 'email'
               }
           ]
       }
   }

   submit(){
       return this.props.submit()
   }

   renderFields(field, i){
        return(
            <Field label={field.label} type={field.type} key={i}>{field}</Field>
        )
   }

   render(){
       return(
            <div className="Form">
                {this.state.fields.map(this.renderFields)}
                <button onClick={this.props.submit}>Submit</button>
            </div>
       )
   } 
}

function mapDispatchToProps(dispatch){
    return(
        bindActionCreators({update_field}, dispatch)
    )
}

function mapStateToProps(state){
    console.log(state.update_field)
    return(
        {
            submission: state.content
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)