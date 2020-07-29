import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logomai.png';
import './menu.css';
import Button from '../Button'

function Menu() {
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src ={Logo} alt= "MaiFlix logo" />
            </Link> 

         <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Novo Vídeo
         </Button>
        </nav>
    );
}

export default Menu; 