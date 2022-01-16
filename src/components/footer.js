import * as React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone, faClock } from '@fortawesome/free-solid-svg-icons'
import Logo from '../images/logo.png'


const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__info">
            <img 
                className="footer__logo"
                src={Logo} 
                alt="Zweng Trial Technology Logo."
                width='200px'>
            </img>
            <p className='footer__copy'>
                ©2022 Zweng Trial Technology. Site by
                <a className="link__primary footer__link footer__copy-link" 
                    href='https://www.taylormcpherson.dev'
                    target="_blank"
                    rel="noreferrer"
                >
                    Taylor McPherson
                </a>
            </p>
        </div>
        <ul className='footer__list'>
            <li className='footer__list-item'>
                <a className="footer__link link__primary" 
                    href="mailto:kylejzweng@gmail.com" 
                    rel="nofollow noreferrer"
                    target="_blank"
                    aria-label="LinkedIn."
                >   
                    <FontAwesomeIcon icon={faEnvelope} />
                    &nbsp; kylejzweng@gmail.com
                </a>
           </li>
           <li className='footer__list-item'>
                <a className="footer__link link__primary" 
                    href="tel:+01-808-352-8220" 
                    rel="nofollow noreferrer"
                    target="_blank"
                    aria-label="LinkedIn."
                >   
                    <FontAwesomeIcon icon={faPhone} />
                    &nbsp; 808.352.8220
                </a>
           </li>
           <li className='footer__list-item'>
                <FontAwesomeIcon icon={faClock} />
                &nbsp; Available 24/7
           </li>
        </ul>
    </footer>
  )
}

export default Footer