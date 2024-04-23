import React from 'react';
import prog1 from '../../assets/prog1.jpg';
import work1 from '../../assets/work1.jpg';
import work2 from '../../assets/work2.jpg';
import work3 from '../../assets/work3.jpg';
import work4 from '../../assets/work4.jpg';
import './portfolio.css';
import HorizontalScroll from 'react-scroll-horizontal';

function Portfolio() {
    const projects = [
        { name: 'News Application', img: work1, link: 'https://www.stefantopalovic.com/' },
        { name: 'MessBox', img: work2, link: 'https://www.stefantopalovic.com/' },
        { name: 'Calm site', img: work3, link: 'https://www.stefantopalovic.com/' },
        { name: 'Chatgpt X', img: work4, link: 'https://www.stefantopalovic.com/' },
    ];

    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">My projects</span>
            <div className="portfolio__container container">
                <div className="portfolio__projects">
                    {/* <HorizontalScroll> */}
                        {projects.map((item, index) => (
                            <div className="project" key={index}>
                                <div className="project_img">
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <span>{item.name}</span>
                                <a href={item.link} target='_blank' rel="noopener noreferrer">Demo <i className='bx bx-right-arrow-alt'></i></a>
                            </div>
                        ))}
                    {/* </HorizontalScroll> */}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
