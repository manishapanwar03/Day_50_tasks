import React,{useEffect} from 'react'
import './Scroll_animation.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Scroll_animation = () => {
  useEffect(() => {
    AOS.init();
    
  }, [])
  return (
    <>
    <h1>Scroll to see the animation</h1>
    <div className='box show '  data-aos="fade-left" >
      <h2>Content</h2>
    </div>
    <div className='box show'   data-aos="fade-right"> 
      <h2>Content</h2> 
    </div>
    <div className='box show'   data-aos="fade-left">
      <h2>Content</h2>
    </div><br/><br/><br/>
    <div className='box'   data-aos="fade-right">
      <h2>Content</h2>
    </div>
    <div className='box'   data-aos="fade-left">
      <h2>Content</h2>
    </div>
    <div className='box'   data-aos="fade-right">
      <h2>Content</h2>
    </div>
    <div className='box'   data-aos="fade-left">
      <h2>Content</h2>
    </div>
    <div className='box'   data-aos="fade-right">
      <h2>Content</h2>
    </div>
    <div className='box'   data-aos="fade-left">
      <h2>Content</h2>
    </div>
    <div className='box'   data-aos="fade-right">
      <h2>Content</h2>
    </div>
    <div className='box'   data-aos="fade-left">
      <h2>Content</h2>
    </div>
    <div className='box'   data-aos="fade-right">
      <h2>Content</h2>
    </div>
    <div className='box'   data-aos="fade-left">
      <h2>Content</h2>
    </div>

    </>
  )
}

export default Scroll_animation