import React from 'react';
import ChannelInfo from '../ChanelInfo';
import ChannelList from '../ChannelList';
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
        <ChannelList />
      </Grid>
    </>
  );
};

export default Layout;
