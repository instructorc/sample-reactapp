import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test';
//import data from './data.json';

import registerServiceWorker from './registerServiceWorker';



/*function Data(props) {

    const content = props.posts.map((data) =>
      <div key={data.gameid}>
        <h3>{data.winnername}</h3>
        <p>{data.loserid}</p>
      </div>
    );
    
    
    
    return (
      <div>
        {content}
      </div>
    );
  }*/


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Test />, document.getElementById('root2'));
//ReactDOM.render(<Data posts={data} />, document.getElementById('root3'));


registerServiceWorker();
