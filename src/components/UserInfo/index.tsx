import React from "react";

import {
  Container,
  Profile,
  Avatar,
  UserDate,
  Icons,
  MicIcon,
  HeadIcon,
  SettingIcon,
} from "./styles";

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserDate>
          <strong>Giovani Antunes</strong>
          <span>#24526</span>
        </UserDate>
      </Profile>
      <Icons>
        <MicIcon />
        <HeadIcon />
        <SettingIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
