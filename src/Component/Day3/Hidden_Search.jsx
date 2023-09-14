import React, { useState } from 'react';
import './Hidden.css';

const Hidden_Search = () => {
  const [isActive, setIsActive] = useState(false);
  const searchClassName = isActive ? 'search active' : 'search';

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className={searchClassName} onClick={handleClick}>
        {isActive ? (
          <>
          <input type='text' placeholder='Search' className='input' />
        
          </>
          
        ) : (
          <button>
            <img alt=''  src='https://img.icons8.com/?size=2x&id=132&format=png'  height='10px' width='10px'/>
          </button>
        )}
      </div>
    </>
  );
};

export default Hidden_Search;
