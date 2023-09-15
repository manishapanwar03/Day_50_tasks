import React, { useEffect, useState } from 'react';
import './Blury.css';

const Blury = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 100) {
        setCount(count + 1);
      }
    }, 100); 
    return () => clearInterval(interval);
  }, [count]);

  
  const blurValue = (100 - count) / 10; 

  const bgStyle = {
     background: `url(https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80) no-repeat center center/cover`,
     position: 'absolute',
     top: '-30px',
     left: '-30px',
    width: 'calc(100vw + 60px)',
    height: 'calc(100vh + 60px)',
    zIndex: '-1',
    filter: `blur(${blurValue}px)`, 
  };

  return (
    <>
      <section style={bgStyle} className='bg'></section>
      <div className='loading-text'>{count}%</div>
    </>
  );
}; 

export default Blury;
