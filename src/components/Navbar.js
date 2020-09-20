import React from 'react';


const Navbar = () => {
    return (
        <nav className='navbar'>

            <div className='sdds'>
            <a className='navbar__link' href="#intro__header">
                
            <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><title>ionicons-v5-i</title><path d='M261.56,101.28a8,8,0,0,0-11.06,0L66.4,277.15a8,8,0,0,0-2.47,5.79L63.9,448a32,32,0,0,0,32,32H192a16,16,0,0,0,16-16V328a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8l0,136a16,16,0,0,0,16,16h96.06a32,32,0,0,0,32-32l0-165.06a8,8,0,0,0-2.47-5.79Z'/><path d='M490.91,244.15l-74.8-71.56,0-108.59a16,16,0,0,0-16-16h-48a16,16,0,0,0-16,16l0,32L278.19,40.62C272.77,35.14,264.71,32,256,32h0c-8.68,0-16.72,3.14-22.14,8.63L21.16,244.13c-6.22,6-7,15.87-1.34,22.37A16,16,0,0,0,43,267.56L250.5,69.28a8,8,0,0,1,11.06,0L469.08,267.56a16,16,0,0,0,22.59-.44C497.81,260.76,497.3,250.26,490.91,244.15Z'/></svg>
                
                <span className='navbar__link--text'>Home</span> 
            </a>
            <a className='navbar__link' href="#intro__header">
                <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><title>ionicons-v5-e</title><path d='M256,56C145.72,56,56,145.72,56,256s89.72,200,200,200,200-89.72,200-200S366.28,56,256,56Zm0,82a26,26,0,1,1-26,26A26,26,0,0,1,256,138Zm48,226H216a16,16,0,0,1,0-32h28V244H228a16,16,0,0,1,0-32h32a16,16,0,0,1,16,16V332h28a16,16,0,0,1,0,32Z'/></svg>
                
                <span className='navbar__link--text'>About Me</span> 
            </a>


            <a className='navbar__link' href="#projects">
                <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><title>ionicons-v5-h</title><path d='M202.24,74C166.11,56.75,115.61,48.3,48,48h0a31.36,31.36,0,0,0-17.92,5.33A32,32,0,0,0,16,79.9V366c0,19.34,13.76,33.93,32,33.93,71.07,0,142.36,6.64,185.06,47a4.11,4.11,0,0,0,6.94-3V106.82a15.89,15.89,0,0,0-5.46-12A143,143,0,0,0,202.24,74Z'/><path d='M481.92,53.3A31.33,31.33,0,0,0,464,48h0c-67.61.3-118.11,8.71-154.24,26a143.31,143.31,0,0,0-32.31,20.78,15.93,15.93,0,0,0-5.45,12V443.91a3.93,3.93,0,0,0,6.68,2.81c25.67-25.5,70.72-46.82,185.36-46.81a32,32,0,0,0,32-32v-288A32,32,0,0,0,481.92,53.3Z'/></svg>
                
                <span className='navbar__link--text'> Projects </span> 
            </a>
            <a className='navbar__link' href="#intro__header">
                
            <span className='navbar__link--text'> Toggle</span></a>
            </div>
        </nav>
    
    )
}
// ReactDOM.render(Navbar, document.querySelector('head'));
export default Navbar;
