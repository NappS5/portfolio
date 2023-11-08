import React from 'react'
import './footer.css'
import '../reset/reset.css'
import { Link } from 'react-router-dom';
import SocialMedia from '../socialmedia/socialmedia'

function Footer(){
    return(
        <footer id='final'>
            <div className='footer-content'>
            <div className='links-nav'>
            <Link className='port-mim' to="/portfolio">Portfólio</Link>
            <Link className='sobre-mim' to="/">Sobre mim</Link>
            </div>

            <SocialMedia />
        <div id='footer_copyright'>
            ©
            2023 Desenvolvido por Felipe Sander
        </div>
            </div>
        </footer>
    )
}
export default Footer