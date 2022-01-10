import React from "react";
import Layout from "../components/layout";

const ThankYouPage = () => (
    <Layout>
    <div className="contact">
      <section className="contact__section">
          <h1 className='contact__lead-in'>
              Contact Us
          </h1>
          <h2 className='contact__title work__intro-title'>
              Let Us Know How We Can Support You
          </h2>

          <p className="contact__submission">
             <em>Thank you for your inquiry. We will be in touch soon.</em>
          </p>
        </section>
    </div>
  </Layout>
);

export default ThankYouPage;