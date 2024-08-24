import React from 'react'
import style from './Footer.module.css'
import whiteLogo from '../../assets/Images/whiteLogo.png'
export default function Footer() {
  return (
    <footer className={style.footer}>
        <div className="container">
            <div className={style.logo}>
                <img src={whiteLogo} alt="logo" />
            </div>
            <div className={style.footerText}>
                <p>© 2023 Alto-ti All Rights Reserved</p>

                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

            </div>
            <div className={style.footerEnd}>
            The website was developed and built by <a href="https://www.izitechs.com/">IzI Techs</a> 
            </div>
        </div>


    </footer>
  )
}
