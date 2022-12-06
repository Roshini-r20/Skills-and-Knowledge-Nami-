import React from 'react'
import { form } from 'react-bootstrap'

/**
* @author
* @function Input
**/

const Input = (props) => {
    return (
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">{props.label}</label>
            <input type={props.type} class="form-control" id="exampleInputEmail1" placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
            <div id="emailHelp" class="form-text">{props.errorMessage}</div>
        </div>
    )

}

export default Input