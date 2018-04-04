import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Header from './frontend/header';
import Graphics from './frontend/graphics';
import Navigation from './frontend/navigation';
import Form from './frontend/form';

const divStyle = {
  display: "flex",
  flexDirection: "column"
};

const App = () => (
  <HashRouter>
    <div>
      <Switch>
        <div style={divStyle}>
          <Header/>
          <Graphics/>
          <Navigation/>
          <Form/>
        </div>
      </Switch>
    </div>
  </HashRouter>
);

export default App;
