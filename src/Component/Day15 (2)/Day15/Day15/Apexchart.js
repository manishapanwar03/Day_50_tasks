import React, { Component } from "react";
import Chart from "react-apexcharts";

class Apexchart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div>
          <div className="mixed-chart">
            <div className="container" style={{paddingTop:"20px"}}>
            <h6  style={{ fontSize: "15px", color: "darkblack" }}>Sales</h6>
            
            </div>
        
        
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Apexchart;