import React from 'react';
import PropTypes from 'prop-types';



const ProjectItem = ({title , desc, link}) => {
    return (
        <a className='project-grid__item' href={link} target="_blank" rel="noopener noreferrer">
            <div >
                    <h1 className='project-grid__item--title'>{title}</h1>
                    <p>{desc}</p>

            </div>
       </a>
    )
}
ProjectItem.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

export default ProjectItem;
