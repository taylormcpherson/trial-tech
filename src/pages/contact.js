import * as React from 'react'
import Layout from '../components/layout'
import Form from '../components/form'

const ContactPage = () => {
  return (
    <Layout>
      <div className="contact">
        <section className="contact__section"
                 data-sal="fade"
                 data-sal-duration="600"
                 data-sal-delay="200"
                 data-sal-easing="ease-in-out"
        >
            <h1 className='contact__lead-in'>
                Contact Us
            </h1>
            <h2 className='contact__title work__intro-title'>
                How Can We Support You?
            </h2>
            <Form></Form>  
        </section>
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default ContactPage