import React from 'react'
import './Navbar.css'
import iconimg from "./inages/avatar.png"
import Apexchart from './Apexchart'
import Donut from './Donutchart'
import Hidden_Search from './HiddenSearch'
const Navbar = () => {
    return (
        <>
            <div className='container'>
                <div className="m-4" id='first'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <form className="d-flex">
                                <div className="input-group">
                                    {/* <i class="fa fa-search"></i> */}
                                    <Hidden_Search/>
                                </div>
                            </form>
                            <div className="profile">
                            <i class="fa fa-user" style={{margin:"5px"}}></i>
                            <i class="fa fa-bell"style={{margin:"15px"}} ></i>
                                <img src={iconimg} alt='profile_picture' className='img2' />
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="content">
                    <div className="container mt-2 mb-3">
                        <div className="row">
                            <div className="col-md-3" >
                                <div className="card p-2 mb-1" style={{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px",border: "4px",borderRadius: "10px"}}>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            <div className="icon">
                                                <i className="bx bxl-mailchimp"></i>
                                            </div>
                                            <div className="ms-2 c-details">
                                                <h6 className="mb-0" style={{ fontSize: "14px", color: "darkgray" }}>BUDGET</h6>
                                            </div>
                                        </div>
                                        <div className="badge"> <span style={{ fontSize: "30px", color: "red" }}><i class="fa fa-user"></i></span> </div>
                                    </div>
                                    <div className="mt-5">
                                        <b><h3 className="heading" style={{ fontSize: "40px", color: "darkblack" }}>$24K<br /></h3></b>
                                        <div className="mt-5">
                                            <i class="fa fa-long-arrow-up" style={{ color: "green" }}></i><span style={{ padding: "10px", color: "green" }}>12%</span>
                                            <span style={{ fontSize: "14px", color: "gray" }}> Since Last month </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card p-2 mb-1" style={{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px",border: "4px",borderRadius: "10px"}}>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            <div className="icon">
                                                <i className="bx bxl-mailchimp"></i>
                                            </div>
                                            <div className="ms-2 c-details">
                                                <h6 className="mb-0" style={{ fontSize: "14px", color: "darkgray" }}>TOTAL CUSTOMERS</h6>
                                            </div>
                                        </div>
                                        <div className="badge"> <span style={{ fontSize: "30px", color: "green" }}><i class="fa fa-user-circle"></i></span> </div>
                                    </div>
                                    <div className="mt-5">
                                        <b><h3 className="heading" style={{ fontSize: "40px", color: "darkblack" }}>$1.6k<br /></h3></b>
                                        <div className="mt-5">
                                            <i class="fa fa-long-arrow-down" style={{ color: "red" }}></i><span style={{ padding: "10px", color: "red" }}>16%</span>
                                            <span style={{ fontSize: "14px", color: "gray" }}> Since Last month </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card p-2 mb-1" style={{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px",border: "4px",borderRadius: "10px"}}>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            <div className="icon">
                                                <i className="bx bxl-mailchimp"></i>
                                            </div>
                                            <div className="ms-2 c-details">
                                            <h6 className="mb-0" style={{ fontSize: "14px", color: "darkgray" }}>TASK PROGRESS</h6>
                                            </div>
                                        </div>
                                        <div className="badge"><span style={{ fontSize: "30px", color: "orange" }}><i class="fa fa-product-hunt"></i></span> </div>
                                    </div>
                                    <div className="mt-5">
                                    <b><h3 className="heading" style={{ fontSize: "40px", color: "darkblack" }}>75.5%<br /></h3></b>
                                        <div className="mt-5">
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card p-2 mb-1" style={{boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px",border: "4px",borderRadius: "10px"}}>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            <div className="icon">
                                                <i className="bx bxl-mailchimp"></i>
                                            </div>
                                            <div className="ms-2 c-details">
                                                <h6 className="mb-0" style={{ fontSize: "14px", color: "darkgray" }}>TOTOAL PROFIT</h6>
                                            </div>
                                        </div>
                                        <div className="badge"> <span style={{ fontSize: "30px", color: "blue"}}><i class="fa fa-money"></i></span> </div>
                                    </div>
                                    <div className="mt-5">
                                        <b><h3 className="heading" style={{ fontSize: "40px", color: "darkblack" }}>$15k%<br /></h3></b>
                                        <div className="mt-5">
                                            <span style={{ fontSize: "14px", color: "gray" }}> Since Last month </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='row' >
                    <div className='col-lg-6 apexchatt1'>
                        <Apexchart />
                    </div>
                    <div className='col-lg-6 ' >
                        <div className='donutt'>
                            <Donut />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar