import React  from 'react';
import ProjectItem from './ProjectItem';

const Project = () => {

    return (
        <div className='global'>
            <h2 className ='project__main-header'id='projects'>Below are some of my projects that I'm either actively working on completed what I wanted to accomplish.</h2> 
           <div className="project-grid">
               <ProjectItem title='ColorVert' desc='By using svg filters to place on a broswer me and my teammates make a  Google  Chrome Extension that allows for users to create custom filters for colorblind users or any person with color vision deficiencies.' link='https://github.com/HamzaWaseemBajwa/ColorVert-browser-extension'/>

               <ProjectItem title='Title' desc='info here' link='https://github.com/HamzaWaseemBajwa/ColorVert-browser-extension'/>
               
               <ProjectItem title='Title' desc='info here' link='https://github.com/HamzaWaseemBajwa/ColorVert-browser-extension'/>
            </div>   
        </div>
    )
}

export default Project;
