import React from 'react'
import './me.css'
import { Link } from 'react-router-dom';


function Me(){
    return(
        <>
        <div className='me-container'>
            <img className='felipe-sander' src='./imgs/felipe-sander.png' alt='Me similing'></img>
        </div>
            <div className='links-nav'>
            <Link className='port-mim' to="/portfolio">Portfólio</Link>
            <Link className='sobre-mim' to="/">Sobre mim</Link>
            </div>
        </>
    )
}

export default Me