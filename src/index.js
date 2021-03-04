import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const printHello = () => console.log("Hello!!!")

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={printHello} />
  </div>,
  document.getElementById('root')
);