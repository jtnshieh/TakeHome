import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Header from './frontend/header';
import Graphics from './frontend/graphics';
import Navigation from './frontend/navigation';
import Form from './frontend/form';
import Form2 from './frontend/form2';
import Form3 from './frontend/form3';

const divStyle = {
  display: "flex",
  flexDirection: "column"
};

const App = () => (
  <HashRouter>
    <div>
      <Switch>
        <Route exact path='/' render={props =>
          <div style={divStyle}>
            <Header/>
            <Graphics/>
            <Navigation
              step="1"/>
            <Form
              history={props.history}
              />
          </div>
        } />
        <Route exact path='/form2' render={props =>
          <div style={divStyle}>
            <Header/>
            <Graphics/>
            <Navigation
              step="2"/>
            <Form2
              history={props.history}
              />
          </div>
        } />
        <Route exact path='/form3' render={props =>
          <div style={divStyle}>
            <Header/>
            <Graphics/>
            <Navigation
              step="3"/>
            <Form3
              history={props.history}
              />
          </div>
        } />
      </Switch>
    </div>
  </HashRouter>
);

export default App;
