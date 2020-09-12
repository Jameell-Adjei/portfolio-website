import React from 'react';

const About = () => {
    return (
        <div className='global'>
            <h1>Temp data</h1>
            <p className='about-desc'>
            Currently, I mainly focuing on creating (and sometimes designing) websites 
            and applications that are easy to use and that are able to fulfill a cilent or company's needs.
            The list below contains some of skills I learned over the years that pertain to web development.
            For a more deeper look into my skill set you can take a look at my resume here.
            </p>

            <ul className='skill-list'>
                <li className='skill-list__item'>JavaScript (ES6/ES2015)</li>
                <li className='skill-list__item'>React</li>
                <li className='skill-list__item'>CSS</li>
                <li className='skill-list__item'>SASS/SCSS</li>
                <li className='skill-list__item'>MongoDB</li>
                <li className='skill-list__item'>Mongoose</li>
                <li className='skill-list__item'>Express</li>
                <li className='skill-list__item'>Node.js</li>

            </ul>
        </div>
    )
}

export default About;
