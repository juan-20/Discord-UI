import React from 'react';
import ChannelInfo from '../ChanelInfo';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import { Grid } from './styles';


function Layout() {
  return (
    <>
      <Grid >
        <ServerList />
        <ServerName />
        <ChannelInfo />
      </Grid>
    </>
  );
};

export default Layout;
