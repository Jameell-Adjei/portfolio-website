import React , {useEffect} from 'react';
import anime from 'animejs';

const Logo = () => {

// Create a timeline with default parameters
useEffect(() => {

  anime.set('.noBlah', {
    translateX: 48,
    translateY: 0,
  });


  const animation = anime.timeline({
    easing: 'easeOutExpo',
    delay: 200,
    duration: 3000
  });
  
  // Add animatation in steps
  
  animation
  .add({
    targets: '.noBlah',
    opacity: 0,
    scale: 0.1,
    duration: 500
  })

  .add({
    targets: '.blah',
    rotate: 360,
    offset: '-=500',
    duration: 1500
  })

  .add({
    targets: '.noBlah',
    scale: 1,
    opacity: 1,
    offset: '300',
    duration: 500
  })


  .add({
    targets: '.blah',
    scale: 0.1,
    opacity: 0,
    duration: 500
  })
}, [])

    return (
      <div className='art'>
        <svg width="177px" className='blah' height="188px" viewBox="0 0 177 188" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
          <desc>Created with Lunacy</desc>
          <g id="Group" transform="translate(7.5 7.5)">
            <path d="M0 1L160 1" transform="translate(1 5.0000305)" id="Line" fill="none" fillRule="evenodd" stroke="#DEE3ED" strokeWidth="15" strokeLinecap="square" />
            <path d="M1 0L1 160" transform="translate(160 6.0000305)" id="Line-2" fill="none" fillRule="evenodd" stroke="#DEE3ED" strokeWidth="15" strokeLinecap="square" />
            <path d="M1 0L1 160" transform="translate(0 6.0000305)" id="Line-3" fill="none" fillRule="evenodd" stroke="#DEE3ED" strokeWidth="15" strokeLinecap="square" />
            <path d="M0 1L160 1" transform="translate(1 165.00003)" id="Line-4" fill="none" fillRule="evenodd" stroke="#DEE3ED" strokeWidth="15" strokeLinecap="square" />
            <g id="loader J" className="noBlah" fill="#DEE3ED" transform="translate(48 0)">
              <path d="M60.192 52.5301L49.824 52.5301L49.824 113.01Q49.824 125.682 43.488 132.018Q37.152 138.354 25.776 138.354Q16.56 138.354 11.016 134.394Q5.472 130.434 2.448 124.098L10.08 118.338Q13.104 124.242 16.632 126.33Q20.16 128.418 24.912 128.418Q32.544 128.418 35.928 124.242Q39.312 120.066 39.312 113.01L39.312 52.5301L20.736 52.5301L20.736 43.3141L60.192 43.3141L60.192 52.5301Z" />
            </g>
          </g>
        </svg>
        </div> 
    )
}

export default Logo
