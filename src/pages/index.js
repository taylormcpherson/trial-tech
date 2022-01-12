import * as React from 'react'
import Layout from '../components/layout'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import LegalTechImg from '../images/legal-tech.jpg'


// data
const services = [
  {
    copy: 'Comprehensive and real-time document, image, and video call-up using TrialDirector 6 and TrialDirector 360.',
  },
  {
    copy: '24/7 availability for depositions, hearings, trials, or other live presentations.'
  },
  {
    copy: 'General legal assistance support bringing your law practice innovatively into the rapidly expanding digital world.',
  },
  {
    copy: 'Remote-friendly work throughout the COVID-19 Pandemic. In-person services with appropriate safeguards upon request.',
  },
]

const IndexPage = () => {
  return (
    <Layout>
      <div className="work">
        <section className="work__intro work__section">
          <h1 className='work__intro-title'
              data-sal="slide-up"
              data-sal-duration="300"
              data-sal-delay="300"
              data-sal-easing="ease-in-out"
          >
            Your Partner for Digital Litigation Services
          </h1>
          <p className='work__intro-desc'
             data-sal="slide-up"
             data-sal-duration="300"
             data-sal-delay="300"
             data-sal-easing="ease-in-out"
          >
            Specializing in live, multimedia presentations with TrialDirector and more.
          </p>
          <button type="button"  
                  className='button__primary'
                  onClick={() => scrollTo('#services')}
                  data-sal="fade"
                  data-sal-duration="750"
                  data-sal-delay="750"
                  data-sal-easing="ease-in-out"
          >
            View Services &nbsp;&nbsp;
            <span><FontAwesomeIcon icon={faAngleDown} /></span>
          </button>
        </section>
        <section className='work__services work__section' 
                 id="services"
        >
          <h2 className='work__services-title'>
            Our Services
          </h2>
          <div className='work__services-flex'>
            <ul className='work__services-list'>
                {services.map( (service, index) => (
                  <li className='work__services-list--item'
                      key={index}
                  >
                    {service.copy}
                  </li>
                ))}
              </ul>
        
              <figure className='work__services-figure'>
                <img 
                  className="work__services-img img"
                  src={LegalTechImg} 
                  alt="A laptop, a smartphone, and a cup of coffee on an office desk."
                  width='400px'>
                  </img>
              </figure>
          </div>
        </section>
      </div>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage