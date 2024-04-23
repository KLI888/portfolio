import React from 'react'
import htmlCss from '../../assets/htmlCss.svg'
import jsTs from '../../assets/jsTs.svg'
import reactNext from '../../assets/reactNext.svg'
import tailSaas from '../../assets/tailSaas.svg'
// import './Home.css'


function Stack() {
  return (
    <div className="home__techstack">
      <h3 className="home__techstackHead">Tech Stack</h3>
      <div className="home__techstackGap"></div>
      <ul className="home__stack">
        <li className="home__stackItem">
            <img src={htmlCss} alt="" />
        </li>
        <li className="home__stackItem">
            <img src={jsTs} alt="" />
        </li>
        <li className="home__stackItem">
            <img src={reactNext} alt="" />
        </li>
        <li className="home__stackItem">
            <img src={tailSaas} alt="" />
        </li>
      </ul>
    </div>
  )
}

export default Stack
