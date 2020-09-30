import React , {useRef , useEffect, useState} from 'react';

const Intro = () => {
    const introRef = useRef(null);
 
    const onScreen = useOnScreen(introRef, {rootMargin: "-390px 0px 0px 0px"});
    const clicked = () => console.log(introRef.current.classList);
 
   // Hook to check if the element is within the viewport/screen
 
   function useOnScreen(ref, options) {
     // State and setter for storing whether element is visible
    
     const [isIntersecting, setIntersecting] = useState(false);
     useEffect(() => {
        const currentRef = ref.current;
        const navbar = document.querySelector('.navbar');

      console.log(ref.current, document.querySelector('.navbar'));
       const observer = new IntersectionObserver(
         ([entry]) => {

           // Update our state when observer callback fires
           setIntersecting(entry.isIntersecting);

          if (!entry.isIntersecting) {
           navbar.classList.add("nav-scrolled");
           console.log(entry.intersectionRatio + " intersected")
         } else if (entry.isIntersecting && navbar.classList.contains('nav-scrolled')){
           console.log(entry.intersectionRatio + " not intersected")
           navbar.classList.remove("nav-scrolled");
         }

         },
           options
       );
      
       if (currentRef) {
         observer.observe(currentRef);
       }
       return () => {
         observer.unobserve(currentRef);
       };
     }, []); 
     
     return isIntersecting;
   }
 



    return (
        <div className='global intro' ref={introRef} onClick={clicked}>
            <h1 className='intro__main--header' id='intro__header'>Hello I'm Jameell and I build applications that run on the web</h1>

            <p> I am a recent college graduate living in New York that develops front-end as well as full-stack applications.</p>

            <a href="mailto:jameelladjei@gmail.com">
                <button className='intro__button'>Get in Touch</button>
            </a>
            
        </div>
    )
}

export default Intro;
