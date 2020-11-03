import {useEffect, useState} from 'react';




export function useOnViewport(options, elementClassName, newClass){
  useEffect(()=> {
    const element = document.querySelector(elementClassName);

    const observer = new IntersectionObserver(
      ([entry]) => {

        if(entry.isIntersecting){
          element.classList.add(newClass);
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

      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          setIntersecting(entry.isIntersecting);

        if (!entry.isIntersecting) {
          element.classList.add(newClass);

        } else if (entry.isIntersecting && element.classList.contains(newClass) && removed){
          element.classList.remove(newClass);
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
  }


