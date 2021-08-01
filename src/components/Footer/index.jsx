import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'


export const Footer = () => {
    return (
        <div className="main-footer">
        <div className="container-footer">
        <div className="d-flex justify-content-around">
            
      

            
        <div className="footer-bootom">
        <p className="text-xs-center">&copy;{new Date().getFullYear()} All Rigths Reserved</p>
        </div>
        </div>
        </div>
        </div>

    )   
}

