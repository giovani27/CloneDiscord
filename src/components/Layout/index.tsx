import React from "react";
import ServerList from "../ServerList";
import ServerName from "../ServerName";

import { Container } from "./style";
import ChannelInfo from "../ChannelInfo/index";
import ChannelList from "../ChannelList/index";
import UserInfo from "../UserInfo/index";
import UserList from "../UserList/index";
import ChannelData from "../ChannelData";

const Layout: React.FC = () => {
  return (
    <Container>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <ChannelData />
      <UserList />
    </Container>
  );
};

export default Layout;
