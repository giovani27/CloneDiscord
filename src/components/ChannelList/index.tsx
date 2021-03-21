import React from "react";

import { Container, Categoria, AddCategoryIcon } from "./styles";
import ChannelButton from "../ChannelButton/index";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Categoria>
        <span>Canais de Texto</span>
        <AddCategoryIcon />
      </Categoria>
      <ChannelButton channelName="Chat-Livre" />
      <ChannelButton channelName="Trabalho" />
      <ChannelButton channelName="LOL" />
      <ChannelButton channelName="Valorant" />
      <ChannelButton channelName="CSGO" />
    </Container>
  );
};

export default ChannelList;
