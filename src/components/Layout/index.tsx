import React from 'react';
import ServerList from '../ServerList';
import { Grid } from './styles';


function Layout() {
  return (
    <>
      <Grid >
        <ServerList />
      </Grid>
    </>
  );
};

export default Layout;
