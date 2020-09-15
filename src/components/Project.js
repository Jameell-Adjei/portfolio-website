import React from 'react';
import ProjectItem from './ProjectItem';

const Project = () => {
    return (
        <div className='global'>
           <h2 id='projects'>Below are some of my projects that I'm either actively working on completed what I wanted to accomplish.</h2> 
           <div className="project-grid">
               <ProjectItem title='Title' desc='info here'/>
               <ProjectItem title='Title' desc='info here'/>
               <ProjectItem title='Title' desc='info here'/>
               <ProjectItem title='Title' desc='info here'/>
               <ProjectItem title='Title' desc='info here'/>
               <ProjectItem title='Title' desc='info here'/>
               <ProjectItem title='Title' desc='info here'/>
               <ProjectItem title='Title' desc='info here'/>
               <ProjectItem title='Title' desc='info here'/>
            </div>  
        </div>
    )
}

export default Project;
