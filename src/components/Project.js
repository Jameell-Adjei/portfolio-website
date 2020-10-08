import React  from 'react';
import ProjectItem from './ProjectItem';
import { useOnScreen , useOnViewport} from '../helperFuncs';

const Project = () => {

    useOnViewport({rootMargin: '0px 0px 0px 0px', threshold: 0.6}, '.project-container', 'anime');
    return (
        <div className='global project-container'>
            <h2 className ='project__main-header'id='projects'>Below are some of my projects that I'm either actively working on completed what I wanted to accomplish.</h2> 
           <div className="project-grid">
               

               <ProjectItem title='Portfolio Website' desc='As a way to better portray myself and my work to potential employers I created this thie website mainly using React and SCSS.' link='https://github.com/Jameell-Adjei/portfolio-website'/>
               
               <ProjectItem title='ColorVert' desc='By using svg filters to place on top of the browser window my teammates and I made a  Google  Chrome Extension that allows for colorblind users or any person with color vision deficiencies to create custom filters to get a better user experience.' link='https://github.com/HamzaWaseemBajwa/ColorVert-browser-extension'/>


               <ProjectItem title='Email Client' desc='With tools such as Java and JavaFX I created a email client that can fetch, send, and compose emails in the client. The client can handle these tasks concurrently using classes created in JavaFX.' link=''/>
            </div>   
        </div>
    )
}

export default Project;
