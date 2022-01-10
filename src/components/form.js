import * as React from 'react'


const Footer = () => {
  return (
    <form className='contact__form'
        name="Contact Form" 
        method="POST" 
        //action="https://formspree.io/f/mnqwnkgk"
        action="https://getform.io/f/3792217b-74b1-4a12-833f-20ab50b69867"
    >
        <label>
            Name
            <input type="text" name="name" id="name"/>
        </label>
        <label>
            Email
            <input type="email" name="_replyto" id="email" />
        </label>
        <label>
            Message
            <textarea name="message" id="message" rows="5"/>
        </label>
        <button className="contact__submit button__primary" type="submit">
            Send
        </button>
    </form>
  )
}

export default Footer