import React from 'react';
// import { Switch } from 'react-router-dom';
import Header from './frontend/header';
import Graphics from './frontend/graphics';
import Navigation from './frontend/navigation';
import Form from './frontend/form';

const divStyle = {
  display: "flex",
  flexDirection: "column"
};

const App = () => (
  <div>
    <Header/>
    <div style={divStyle}>
      <Graphics/>
      <Navigation/>
      <Form/>
    </div>
  </div>
);

export default App;
