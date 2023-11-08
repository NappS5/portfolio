import React from 'react'
import './me.css'
import { Link } from 'react-router-dom';


function Me(){
    return(
        <>
        <div className='me-container'>
            <img className='felipe-sander' src='./imgs/felipe-sander.png' alt='Me similing'></img>
        </div>
            <div className='links-nav-header'>
            <Link className='sobre-mim-header' to="/">Sobre mim</Link>
            <Link className='port-mim-header' to="/portfolio">Portfólio</Link>
            </div>
        </>
    )
}

export default Me