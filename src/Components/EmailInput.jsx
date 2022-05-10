import React from 'react';
import './EmailInput.css' 

function EmailInput(props) {
    return (
        <div>
            <div className='group_Name'>
                <label><h4>{props.title}</h4></label>
            </div>
            <input  placeholder={props.placeholder} />
        </div>
    )
}

export default EmailInput