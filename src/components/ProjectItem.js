import React from 'react';
import PropTypes from 'prop-types';
import ReactAnime from 'react-animejs';
//const ReactAnime = require('react-animejs');
const {Anime} = ReactAnime;


const ProjectItem = ({title , desc, link}) => {
    return (
        // <Anime  className='project-grid__item'

        // _onMouseEnter = {[{
        //     targets: '.project-grid',
        //     opacity: [0 , 1],
        //     duration: 1500,
        //     direction: `alternate`
        // }
        // ]}
        // >
        <a className='project-grid__item' href={link} target="_blank" rel="noopener noreferrer">
        <div >
                <h1 className='project-grid__item--title'>{title}</h1>
                <p>{desc}</p>

        </div>
       </a>
       /* </Anime>    */
    )
}
ProjectItem.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

export default ProjectItem;
