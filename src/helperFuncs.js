import React , { useRef, useEffect, useState} from 'react';




export function useOnViewport(options, elementClassName, newClass){
  useEffect(()=> {
    const element = document.querySelector(elementClassName);

    const observer = new IntersectionObserver(
      ([entry]) => {

        if(/*entry.intersectionRatio >= 0.9 &&*/ entry.isIntersecting){
          element.classList.add(newClass);
          console.log("intersected " + entry.intersectionRatio + " " + element.classList)
        } 
      },
      options
    )

    if (element) {
      observer.observe(element);
    }
    return () => {
      observer.unobserve(element);
    }; 



  }, [])
}
// Hook to check if the element is within the viewport/screen
 
export function useOnScreen(ref, options, elementClassName, newClass, removed) {
    // State and setter for storing whether element is visible
   
   const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
       const currentRef = ref.current;
       const element = document.querySelector(elementClassName);

     console.log(ref.current , element);
      const observer = new IntersectionObserver(
        ([entry]) => {
            console.log(element)
          // Update our state when observer callback fires
          setIntersecting(entry.isIntersecting);

        if (!entry.isIntersecting) {
          element.classList.add(newClass);
        //  console.log(entry.intersectionRatio + " not intersected" + element)
        } else if (entry.isIntersecting && element.classList.contains(newClass) && removed){
        //  console.log(entry.intersectionRatio + " intersected")
          element.classList.remove(newClass);
        //  console.log( element.classList)
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
    
    //return isIntersecting;
  }


