import React from 'react';
import Logo from '../../assets/img/logomai.png';
import './menu.css';
import Button from '../Button'

function Button(props) {
    // props => {className: "o que alguém passar", href = "/"} 
    return(
        <a href = {props.href} className={props.className}>
           {props.children}      
        </a>
    );
}

export default Button; 