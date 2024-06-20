import React from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from "axios";
import store from './redux/store';
import setupAxios from "./redux/setupAxios";
import { customerRoutes, businessRoutes, authRoutes } from "./modules/routes/all_routes";
import Authmiddleware from "./modules/middleware/Authmiddleware";

setupAxios(axios, store);

function App() {
  return (
    <Provider store = { store }>
        <Router>
          <div className="App">
            <Switch>
              {authRoutes.map((route, idx) => (
                <Authmiddleware 
                  path={route.path}
                  component={route.component}
                  key={idx}
                  isAuthProtected={false}
                />
              ))}
              {businessRoutes.map((route, idx) => (
                <Authmiddleware 
                  path={route.path}
                  component={route.component}
                  key={idx}
                  isAuthProtected={true}
                  exact
                />
              ))}
              {customerRoutes.map((route, idx) => (
                <Authmiddleware 
                  path={route.path}
                  component={route.component}
                  key={idx}
                  isAuthProtected={true}
                  exact
                />
              ))}
            </Switch>
          </div>
            
        </Router>
    </Provider>
  );
}

export default App;
