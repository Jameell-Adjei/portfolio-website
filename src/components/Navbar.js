import React , {useRef} from 'react';


const Navbar = () => {

  const navRef = useRef(null);
// debugger;
 // const onScreen = useOnScreen(navRef, {root: null, rootMargin: "-40px 0px 0px 0px"});
  const clicked = () => console.log(navRef.current.classList);
 // useOnScrolling(navRef, {rootMargin: '-20px 0px 0px 0px'});
  // const 
  // function useOnScrolling(ref , options){
  //   //debugger;
  //   const tempRef = ref.current;
  //   //console.log(ref.current)
  //   const [isIntersecting , setIntersecting] = useState(false);
  //   useEffect(()=> {
  //     const observer = new IntersectionObserver(([entry])=>{
  //      setIntersecting(entry.isIntersecting)
       

  //     },{ options });


  //     if(tempRef){
  //       console.log(tempRef);
  //       observer.observe(tempRef)
  //     }
      

  //     if(isIntersecting){
  //       tempRef.classList.add('class');
  //       console.log(tempRef);
  //     }
  //     return () => {
  //       console.log(tempRef);
  //      observer.unobserve(tempRef)
  //     };
  //   }, [isIntersecting]);

  //   return isIntersecting;
  // }

  // Hook

  /*when the navber is not position fixed the code works*/
  // function useOnScreen(ref, options) {
  //   // State and setter for storing whether element is visible
  //   const [isIntersecting, setIntersecting] = useState(false);
  //   useEffect(() => {
  //     console.log('ss');
  //    // debugger;
   
  //     const observer = new IntersectionObserver(
  //       ([entry]) => {
  //         console.log(ref);
  //         console.log(entry)
  //         // Update our state when observer callback fires
  //         setIntersecting(entry.isIntersecting);
  //        // console.log('entry.isIntersecting ', isIntersecting);
  //        if (!entry.isIntersecting) {
  //         ref.current.classList.add("nav-scrolled");
  //         console.log('trdfdfgdfdfg')
  //         console.log(entry.intersectionRatio)
  //       } else if (entry.isIntersecting){
  //         console.log(entry.intersectionRatio)
  //         ref.current.classList.remove("nav-scrolled");
  //       }

  //        if(entry.intersectionRatio === 0){
  //          console.log('not in viewport')
  //        } else {
  //          console.log('in viewport')
  //        }
  //       },
  //         options
  //     );
  //     if (ref.current) {
  //       observer.observe(ref.current);
  //       console.log('tytdgfd')
  //       console.log(observer)
  //     }
  //     return () => {
  //       observer.unobserve(ref.current);
  //       console.log('2')
  //     };
  //   }, []); // Empty array ensures that effect is only run on mount and unmount
  //   console.log('isIntersecting ', isIntersecting);
  //   return isIntersecting;
  // }

  
    return (
      
      // {onScreen ? (
      //   <div>
      //     <h1>Hey I'm on the screen</h1>
      //     <img src="https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif" />
      //   </div>
      // ) : (
      //   <h1>Scroll down 300px from the top of this section 👇</h1>
      // )}
     
        <nav className='navbar' onClick={clicked}>
          
         {/* // {true && console.log(navRef.current)} */}
            <svg width="32px" height="36px"  ref={navRef} viewBox="0 0 32 36" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
              <desc>Created with Lunacy</desc>
              <g id="Group-2" transform="translate(2.5 2.5)">
                <path d="M0 0L27 0L27 17.9754L27 31L13.5 31L0 31L0 0Z" transform="matrix(-1 0 0 -1 27 31)" id="Line-2" fill="none" fillRule="evenodd" stroke="#DEE3ED" strokeWidth="5" />
                <g id="J" fill="#DEE3ED" transform="translate(8 1)">
                  <path d="M10.032 8.83834L8.304 8.83834L8.304 18.9183Q8.304 21.0303 7.248 22.0863Q6.192 23.1423 4.296 23.1423Q2.76 23.1423 1.836 22.4823Q0.912 21.8223 0.408 20.7663L1.68 19.8063Q2.184 20.7903 2.772 21.1383Q3.36 21.4863 4.152 21.4863Q5.424 21.4863 5.988 20.7903Q6.552 20.0943 6.552 18.9183L6.552 8.83834L3.456 8.83834L3.456 7.30234L10.032 7.30234L10.032 8.83834Z" />
                </g>
              </g>
            </svg>

              <div className='navbar__items'>
                  <span className='navbar__items--link'>Home</span>
                  <span className='navbar__items--link'>About Me</span>
                  <span className='navbar__items--link'>Projects</span>
              </div>

        </nav>
    
    )
}
export default Navbar;
