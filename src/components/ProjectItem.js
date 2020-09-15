import React from 'react';
import PropTypes from 'prop-types';


const ProjectItem = ({title , desc}) => {
    return (
        <div className='project-grid__item'>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}
ProjectItem.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
}

export default ProjectItem;
