import React, { useState } from 'react';
import './Rotating.css';

const Rotating = () => {
  const [navVisible, setNavVisible] = useState(false);

  const openNav = () => {
    setNavVisible(true);
  };

  const closeNav = () => {
    setNavVisible(false);
  };

  return (
    <div className={`container ${navVisible ? 'show-nav' : ''}`}>
      <div className='circle-container'>
        <div className='circle'>
          <button id='open' onClick={openNav}>|||</button>
          <button id='close' onClick={closeNav}>✖</button>
        </div>
      </div>
      <div className='content'>
        <h1>Amazing article</h1>
        <small>Florin pop</small>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ducimus perferendis tempora ipsam consectetur sint iure impedit omnis rem, dignissimos voluptates incidunt molestias quae labore, officia ea in, doloremque quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, maxime saepe. Magni, maiores quidem exercitationem enim repellendus porro inventore debitis ad autem ut blanditiis itaque iusto nisi odio, quam ipsam.
        </p>
        <h3>My Dog</h3>
        <img alt='' src='https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80' />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ducimus perferendis tempora ipsam consectetur sint iure impedit omnis rem, dignissimos voluptates incidunt molestias quae labore, officia ea in, doloremque quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, maxime saepe. Magni, maiores quidem exercitationem enim repellendus porro inventore debitis ad autem ut blanditiis itaque iusto nisi odio, quam ipsam.
        </p>
        
      </div>

      {navVisible && (
       <nav>
       <ul>
         <li><i className='fa fa-home'></i> Home</li>
         <li><i className='fa fa-info-circle'></i> About</li>
         <li><i className='fa fa-envelope'></i> Contact</li>
       </ul>
     </nav>
     
      )}
    </div>
  );
}

export default Rotating;
