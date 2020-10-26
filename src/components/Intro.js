import React , {useRef} from 'react';
import { useOnScreen } from '../helperFuncs';

const Intro = () => {
    const introRef = useRef(null);
 
    const clicked = () => console.log(introRef.current.classList);
    useOnScreen(introRef, {rootMargin: "-40% 0px 0px 0px"}, '.navbar', 'nav-scrolled', true);


 
    return (
        <div className='global intro'id='intro__header' ref={introRef} onClick={clicked}>
            <h1 className='intro__main--header' >Hello there, I'm ...</h1>
            <h1 className='intro__main--name'>Jameell</h1>
            <h1 className='intro__main--header'>and I build applications that run on the web.</h1>
            <p className='intro__desc'> I am a web developer based in New York that develops front-end as well as full-stack applications. Also I have developed software in various programming languages.</p>
        </div>
    )
}

export default Intro;
