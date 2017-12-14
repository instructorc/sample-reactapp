import React, { Component } from 'react';

import{Line } from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: {
        type: 'line',
        data: {
          labels: ['Boston','Worcester','Chicago','New England','Cambridge']/*(function(){
                 var arr = [];
                 for(var i=0; i<data.length; i++){
                     arr.push(data[i].winnername);
                         
                     
                 }
                 return arr;
             })("Name:")*/,
          datasets: [{
              label: 'Game Winners',
              data: [65, 59, 80,81,56]/*(function(){
                var win = [];
                for(var i=0; i<data.length; i++){
                    win.push(data[i].loserpos);
                        
                    
                }
                return win;
            })("Name:")*/,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
        options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:false
                  }
              }]
          }
      }
      }
 
    }
  }


  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
  }

  render() {
      return(
        <div className="chart">
          <Line
            data={this.state.chartData}
            width={100}
            height={50}
            options={{ }}
          />
          </div>
      )
    
  }
}

export  default Chart;
