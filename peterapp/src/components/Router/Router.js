import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import LogIn from '../scenes/LogIn/LogIn';
import Registration from '../scenes/Registration/Registration';
import MediaCard from '../scenes/Card/Card'
import ControlledOpenSelect from '../Filter/filter'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


export default () => (
  <Switch>
    <Route exact path="/">
    <Grid
  container
  direction="column"
  justify="space-between"
  alignItems="flex-start">
  <div className='ContainerOne'>    
    <div className='ContainerMain'>
      <ControlledOpenSelect/>
      <Box display='flex' justifyContent="rigth" flexWrap="wrap">
      <MediaCard />
      <MediaCard />
      <MediaCard />
      </Box> 
      </div>
      </div>
      </Grid>
    </Route>
    <Route path="/login">
      <LogIn />
    </Route>
    <Route path="/registration">
      <Registration />
    </Route>
  </Switch>
);