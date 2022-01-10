import * as React from 'react'
import Layout from '../components/layout'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import LegalTechImg from '../images/legal-tech.jpg'


// data
const services = [
  {
    copy: 'Comprehensive digital services for TrialDirector 6 and TrialDirector 360. We are available for any of your needs from depositions to trials.',
  },
  {
    copy: 'Legal aid, paralegal services, and general support bringing your practice into the fast-paced, digital world.',
  },
  {
    copy: 'Remote-friendly work throughout the COVID-19 Pandemic. In-person trial services may be offered upon request.',
  },
]

const IndexPage = () => {
  return (
    <Layout>
      <div className="work">
        <section className="work__intro work__section">
          <h1 className='work__intro-title'>
            Your Partner for Digital Litigation Services.
          </h1>
          <button type="button"  
                  className='button__primary'
                  onClick={() => scrollTo('#services')}
          >
            View Services &nbsp;&nbsp;
            <FontAwesomeIcon icon={faAngleDown} />
          </button>
        </section>
        <section className='work__services work__section' id="services">
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
                  width='100%'>
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