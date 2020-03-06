import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Router from './components/Router/Router';

import ControlledOpenSelect from "./components/Filter/filter"


function App() {
  return (
    <Provider store={store}>
          <div>
      <img src="TestLogo.jpg" className="Logo"></img>
      <h1>
        Find a significant other for your pet
      </h1>
      <div className="App">
      </div>
      <h2 className='log'>
        <span color='green'>
          <Button variant="contained" color="primary" href='/login'>
            Sign In
        </Button> </span>
        <span color='green'>
          <Button variant="contained" color="primary" href='/auth'>
            Sign Up
        </Button> </span>
        <span color='green'>
          <Button variant="contained" color="primary" href='/account'>
            Account
        </Button> </span>
      </h2>
    </div>
      <BrowserRouter>
      <ControlledOpenSelect/>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center">

          <div className="App">
            <Router />
          </div>
        </Grid>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
