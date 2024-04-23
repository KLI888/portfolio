import React from 'react'
import './contact.css'


function Contact() {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Contact</h2>
        <span className="section__subtitle">I am here</span>
        <div className="contact__container ">
            <div className="contact__content container">
                <b>CONTACT</b><br /><br />
                <h1>Don't be shy! Hit me up! 👇</h1>
                <div className="contact__info">
                    <div className="contact__loc">
                        <i class='bx bx-map-alt'></i>
                        <div className="loc_info">
                            <h2>Location</h2>
                            <a href="https://maps.app.goo.gl/BByryeWyXupyXt1w8" target='_blank'>Jalgaon, Maharastra</a>
                        </div>
                    </div>
                    <div className="contact__mail">
                        <i class='bx bx-envelope'></i>
                        <div className="loc_info">
                            <h2>Mail</h2>
                            <a href="mailto:krushnaborase40@gmail.com" target='_blank'>kriss.dev@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
