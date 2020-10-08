import React from 'react'
import { useOnViewport } from '../helperFuncs'
const Contact = () => {


    useOnViewport({rootMargin: '0px 0px 0px 0px', threshold: 0.8}, '.contact-section', 'anime');
    return (
        <section className='global contact-section' id='contact'>
            <h1 className='contact-section__title'>Getting in Touch with me</h1>
            <p className='contact-section__desc'>The best way to reach me is by  <a href="mailto:jameelladjei@gmail.com" className='contact-section__link'>email</a>  since I check it everyday. Feel free to contact me about the website or any job opportunities. Also if you have any general questions feel free to ask me. I'll respond in a timely manner. Below in the footer there will links to other places where you can learn more about me and my work.</p>
        </section>
    )
}

export default Contact;
