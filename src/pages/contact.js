import * as React from 'react'
import Layout from '../components/layout'

const ContactPage = () => {
  return (
    <Layout>
      <div className="contact">
        <section className="contact__section">
            <h1 className='contact__lead-in'>
                Contact Us
            </h1>
            <h2 className='contact__title work__intro-title'>
                Let Us Know How We Can Support You
            </h2>
            
            <form className='contact__form'
                    name="contact" 
                    method="POST" 
                    data-netlify="true"
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
            </form>
        </section>
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default ContactPage