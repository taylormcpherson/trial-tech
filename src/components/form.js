import * as React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import Logo from '../images/logo.png'


const Footer = () => {
  return (
    <form className='contact__form'
        name="Contact Form" 
        method="POST" 
        data-netlify="true"
        action="/submission"
    >
        <label>
            Name
            <input type="text" name="name" id="name"/>
        </label>
        <label>
            Email
            <input type="email" name="email" id="email" />
        </label>
        <label>
            Message
            <textarea name="message" id="message" rows="5"/>
        </label>
        <button className="contact__submit button__primary" type="submit">
            Send
        </button>
        <input type="reset" className='presentational__is-hidden' value="Eraser" />
    </form>
  )
}

export default Footer