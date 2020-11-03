import React from 'react';
import { useOnViewport } from '../helperFuncs';
import pdf from '../static/Resume.pdf';

const About = () => {


    useOnViewport({rootMargin: '0px 0px -250px 0px', threshold: 0}, '.about-section', 'animate');
    return (
        <section className='global about-section' id='about-section'>
            <h1 className='about__title'>About Me</h1>
            <p className='about-desc'>
            Currently, I am mainly focuing on creating (and sometimes designing) websites 
            and applications that are easy to use and that are able to fulfill a client or company's needs.
            The list below contains some of skills I learned over the years that pertain to web development.
            For a more deeper look into my skill set you can take a look at my resume  <a href={pdf}target='_blank' rel="noopener noreferrer" className='contact-section__link'>here</a>. Also, below in the footer there will be links to other places where you can learn more about me and my work.
            </p>

            <ul className='skill-list'>
                <li className='skill-list__item'>JavaScript (ES6/ES2015)</li>
                <li className='skill-list__item'>React</li>
                <li className='skill-list__item'>CSS/SCSS</li>
                <li className='skill-list__item'>MongoDB</li>
                <li className='skill-list__item'>Mongoose</li>
                <li className='skill-list__item'>Express</li>
                <li className='skill-list__item'>Node.js</li>
            </ul>
        </section>
    )
}

export default About;
