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
        <Route path='/form1' render={props =>
          <div style={divStyle}>
            <Header/>
            <Graphics/>
            <Navigation/>
            <Form
              history={props.history}
              />
          </div>
        } />
        <Route path='/form2' render={props =>
          <div style={divStyle}>
            <Header/>
            <Graphics/>
            <Navigation/>
            <Form2
              history={props.history}
              />
          </div>
        } />
      <Route path='/form3' render={props =>
          <div style={divStyle}>
            <Header/>
            <Graphics/>
            <Navigation/>
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
