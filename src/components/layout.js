import React from "react"
import Helmet from 'react-helmet'
import Favicon from '../images/favicon.png'
import "../styles/styles.scss"
//import "@fontsource/bodoni-moda"
//import "@fontsource/roboto"
import "@fontsource/montserrat"
import NavBar from "./navbar"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Helmet htmlAttributes={{ lang: 'en-US' }}>
        <meta charSet="utf-8" />
        <title>Zweng Trial Technology</title>
        <meta name="description" 
              content="Trial, Litigation, and Legal Tech Support for Law Practices in the USA. Trial Director, Legal Aid, and more." 
        />
        <meta name="format-detection" content="telephone=no"/>
        <link rel="shortcut icon" type="image/png" href={Favicon} />
      </Helmet>
      <NavBar></NavBar>
      <main style={{ margin: `0 auto`, maxWidth: `100vw` }}>
          <div className="presentational__wrapper--layout">
              {children}
          </div>
      </main>
      <Footer></Footer>
    </div>
  )
}