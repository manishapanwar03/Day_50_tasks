import React, { useEffect } from 'react';
import './Expand.css';

const Expanding = () => {
  useEffect(() => {
    const firsts = document.querySelectorAll(".first");

    const handleClick = (event) => {
      const target = event.target;
      firsts.forEach((first) => {
        first.classList.remove("active");
      });
      target.classList.add("active");
    };

    firsts.forEach((first) => {
      first.addEventListener("click", handleClick);
    });
  }, []);

  return (
    <>
      <div className='container'>
        <div className='first active' style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1616731948638-b0d0befef759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60")' }}>
          <h4>Explore The World</h4>
        </div>
        <div className='first' style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1677094766143-e4ff7cd3392c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60")' }}>
          <h4>Wild Forest</h4>
        </div>
        <div className='first' style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1601314167099-232775b3d6fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60")' }}>
          <h4>Sunny Beach</h4>
        </div>
        <div className='first' style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1516617442634-75371039cb3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60")' }}>
          <h4>City in Winter</h4>
        </div>
        <div className='first' style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60")' }}>
          <h4>Mountains Clouds</h4>
        </div>
      </div>
    </>
  );
}

export default Expanding;
