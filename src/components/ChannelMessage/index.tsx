import React from "react";

import { Container, Avatar, Mensagem, Header, Content } from "./styles";
export { Mention } from "./styles";

export interface Props {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
}

const ChannelMessage: React.FC<Props> = ({
  author,
  date,
  content,
  hasMention,
  isBot,
}) => {
  return (
    <Container className={hasMention ? "mention" : ""}>
      <Avatar className={isBot ? "bot" : ""} />
      <Mensagem>
        <Header>
          <strong>{author}</strong>
          {isBot && <span>BOT</span>}
          <time>{date}</time>
        </Header>
        <Content> {content} </Content>
      </Mensagem>
    </Container>
  );
};

export default ChannelMessage;
