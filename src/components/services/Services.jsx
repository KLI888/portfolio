import React from 'react'
import './Services.css'
function Services() {
  return (
    <services className="services section" id="services">
        <h3 className="section__title">Services</h3>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil services__icon"></i>
                    <h3 className="services__title"></h3>
                </div>

                <span className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className="services__modal">
                  <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title"></h3>
                    <p className="services__modal-description">
                      Service with more than 3 years of experience. Providing quality work to client and companies.
                    </p>
                    <ul className="services__modal-services grid">
                      li.
                    </ul>
                  </div>
                </div>
            </div>
        </div>
    </services>
  )
}

export default Services
