import React from 'react'
import './Sidebar.css'
import iconimg from "./inages/favicon-1.png"

const Sidebar = () => {
    return (
        <>
            <div className="wrapper">
                <div className="sidebar">
                    <div className="profile">
                        <img src={iconimg} alt='profile_picture' />
                        <div className='divv'>
                        <h6>Devais</h6>
                        <p>Production</p> 
                         </div>
                        <ul>
                            <li>
                                <a href='#'  id='overview'>
                                    <span className='icon'><i class="fa fa-signal"></i></span>
                                    <span className='active'>Overview</span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <span className='icon'><i class="fa fa-users"></i></span>
                                   <span className='item'>Customers</span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <span className='icon'><i class="fa fa-shopping-bag"></i></span>
                                    <span className='item'>Companies</span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <span className='icon'><i class="fa fa-user"></i></span>
                                    <span className='item'>Account</span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <span className='icon'><i class="fa fa-cogs"></i></span>
                                    <span className='item'>Settings</span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <span className='icon'><i class="fa fa-lock"></i></span>
                                    <span className='item'>Login</span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <span className='icon'><i class="fa fa-registered"></i></span>
                                    <span className='item'>Register</span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <span className='icon'><i class="fa fa-times-circle"></i></span>
                                    <span className='item'>Error</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className='section'>
            <div className='top_navbar'>
                <div className='hamburger'>
                    <a href='#'>
                        <i className='fas fa-bars'></i>
                    </a>
                </div>
            </div>
               */}
        {/* // </div> */}
        
        </>
    )
}

export default Sidebar
