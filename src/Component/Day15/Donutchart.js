import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [44, 55, 41, 17, 15],
      labels: ['A', 'B', 'C', 'D', 'E']
    }
  }

  render() {

    return (
      <div className="donut">
        {/* <h6>Traffic Source</h6> */}
        <div className='container-fluid'>
        <b><h6 style={{ fontSize: "15px", color: "darkblack",paddingTop: "20px" }}>Traffic Source</h6></b>
        </div>
       
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
        <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <i class="fa fa-desktop"></i>
            <b><h6 style={{ fontSize: "15px", color: "darkblack"}}>Desktop</h6></b>
            <b><h6 style={{ fontSize: "15px", color: "darkblack" }}>63%</h6></b>
          </div>
          <div className='col-lg-4'>
          <i class="fa fa-tablet"></i>
            <b><h6 style={{ fontSize: "15px", color: "darkblack" }}>Tablet</h6></b>
            <b><h6 style={{ fontSize: "15px", color: "darkblack"}}>15%</h6></b>
          </div>
          <div className='col-lg-4'>
          <i class="fa fa-phone"></i>
            <b><h6 style={{ fontSize: "15px", color: "darkblack"}}>Phone</h6></b>
            <b><h6 style={{ fontSize: "15px", color: "darkblack" }}>22%</h6></b>
          </div>
        </div>
        </div>


      </div>
    );
  }
}

export default Donut;