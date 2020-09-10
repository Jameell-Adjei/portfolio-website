import React from 'react';


const Navbar = () => {
    return (
        <div className='navbar'>
            <a className='navbar__link' href="#intro__header">Home</a>
            <a className='navbar__link' href="#">About</a>
            <a className='navbar__link' href="#">Projects</a>
            <a className='navbar__link' href="#">Toggle</a>
        </div>
    
    )
}
// ReactDOM.render(Navbar, document.querySelector('head'));
export default Navbar;
