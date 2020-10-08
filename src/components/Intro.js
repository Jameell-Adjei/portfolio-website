import React , {useRef , useEffect, useState} from 'react';
import { useOnScreen , useOnViewport} from '../helperFuncs';

const Intro = () => {
    const introRef = useRef(null);
 
   // const onScreen = useOnScreen(introRef, {rootMargin: "-340.8px 0px 0px 0px"}, '.navbar');
    const clicked = () => console.log(introRef.current.classList);
    useOnScreen(introRef, {rootMargin: "-340.8px 0px 0px 0px"}, '.navbar', 'nav-scrolled', true);
    useOnViewport({rootMargin: '0px 0px 0px 0px', threshold: 0.6}, '.intro', 'anime');

 
    return (
        <div className='global intro'id='intro__header' ref={introRef} onClick={clicked}>
            <h1 className='intro__main--header' >Hello there, I'm ...</h1>
            <h1 className='intro__main--name'>Jameell</h1>
            <h1 className='intro__main--header'>and I build applications that run on the web.</h1>
            <p> I am a web developer based in New York that develops front-end as well as full-stack applications. Also I have developed software in various programming languages.</p>


        </div>
    )
}

export default Intro;
