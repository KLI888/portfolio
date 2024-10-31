import React from 'react'
import './footer.css'


const socialHandles = [
    {
        name: 'linkedin',
        link: 'https://www.linkedin.com/',
        icon : 'bx bxl-linkedin'
    },
    {
        name: 'github',
        link: 'https://github.com/KLI888',
        icon : 'bx bxl-github'
    },


]
function Footer() {
  return (
    <section className="footer__section">
        <div className="footer__container container">
            <h1>Copyright © 2024. All rights are reserved</h1>
            <div className="social">
                {
                    socialHandles.map((handle, index) => (
                      <a href={handle.link} key={index} target='_blank'><i className={handle.icon}></i></a>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Footer
