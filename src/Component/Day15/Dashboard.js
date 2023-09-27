import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const   Dashboard = () => {
  return (
    <>
      <React.Fragment>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-2 col-sm-12'>
              <Sidebar />
            </div>
            <div className='col-lg-10 col-sm-12'>
              <Navbar />
            </div>
          </div>





        </div>
      </React.Fragment>


    </>
  )
}

export default Dashboard