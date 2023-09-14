import React from 'react'
import './Rotating.css'
const Rotating = () => {
  return (
    <>
    <div className='container show nav'>
        <div className='circle-container'>
          <div className='circle'></div>
          <button id='close'>close</button>
          <button id='open'>open</button>
       </div>
    <div className='content'>
      <h1>Amazing article</h1>
      <small>Florin pop</small>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ducimus perferendis tempora ipsam consectetur sint iure impedit omnis rem, dignissimos voluptates incidunt molestias quae labore, officia ea in, doloremque quisquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, maxime saepe. Magni, maiores quidem exercitationem enim repellendus porro inventore debitis ad autem ut blanditiis itaque iusto nisi odio, quam ipsam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ducimus perferendis tempora ipsam consectetur sint iure impedit omnis rem, dignissimos voluptates incidunt molestias quae labore, officia ea in, doloremque quisquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, maxime saepe. Magni, maiores quidem exercitationem enim repellendus porro inventore debitis ad autem ut blanditiis itaque iusto nisi odio, quam ipsam.</p>
      <h3>My Dog</h3>
      <img alt='' src='https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'/>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ducimus perferendis tempora ipsam consectetur sint iure impedit omnis rem, dignissimos voluptates incidunt molestias quae labore, officia ea in, doloremque quisquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, maxime saepe. Magni, maiores quidem exercitationem enim repellendus porro inventore debitis ad autem ut blanditiis itaque iusto nisi odio, quam ipsam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ducimus perferendis tempora ipsam consectetur sint iure impedit omnis rem, dignissimos voluptates incidunt molestias quae labore, officia ea in, doloremque quisquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, maxime saepe. Magni, maiores quidem exercitationem enim repellendus porro inventore debitis ad autem ut blanditiis itaque iusto nisi odio, quam ipsam.</p>
                  
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <i className='fa fa-home'></i>

        " Home"
          </li>
          <li>
          <i className='fa fa-home'></i>
        "About"
          </li>
          <li>
          <i className='fa fa-home'></i>
        "Contact"
          </li>
      </ul>
    </nav>
    </>
  )
}

export default Rotating