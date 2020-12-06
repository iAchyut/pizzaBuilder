import React, { useContext } from 'react';
import './button.css'

const Button = (props) => {
   
    return (
        <button className='buttonBuy' onClick ={props.clicked} disabled={props.enabled}>
            {props.children}
        </button>
    );
}

export default Button;