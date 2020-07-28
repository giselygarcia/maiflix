import React from 'react';
import Logo from '../../assets/img/logomai.png';
import './menu.css';
import Button from '../Button'

function Menu() {
    return(
        <nav className="Menu">
            <a href ="/">
            <img className="Logo" src ={Logo} alt= "MaiFlix logo" />
        </a> 

         <Button as="a" className="ButtonLink" href="/">
            Novo Vídeo
         </Button>
        </nav>
    );
}

export default Menu; 