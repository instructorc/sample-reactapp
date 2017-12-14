import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import data from './data.json';
import { VictoryBar, VictoryChart,VictoryTheme, VictoryStack} from 'victory';
//import Chart from 'chart.js';
//import { Bar} from 'react-chartjs-2';

class Test extends Component {





  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
  }

  
    render() {

      const content = data.map((data) =>
      <div key={data.gameid}>
        <h3>{data.winnername}</h3>
        <p>{data.loserid}</p>
        <p>{data.date}</p>
      </div>
    );
         

      return (

        <div className="Test">
          <header className="Test-header">
            
            <h1 className="Test-title">Iteration of data from data.json file</h1>
          </header>
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={20}
          
          >
          <VictoryStack
          colorScale={"warm"}
          >

            <VictoryBar
              data={data}
              // data accessor for x values
              x="winnerid"
              // data accessor for y values
              y="winnernewrating"
            />
            </VictoryStack>
          </VictoryChart>

          <div>
            {content}
          </div>     
        </div>
      );
    }
  }
 
  export default Test;