import React from "react";

import { Container, User, Role, Avatar } from "./styles";

interface Props {
  nickName: string;
  isBot?: Boolean;
}

const UserRow: React.FC<Props> = ({ nickName, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />
      <strong> {nickName} </strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponivel 1</Role>
      <UserRow nickName="Giovani Antunes" />
      <Role>Offline 1</Role>
      <UserRow nickName="Flavio Antunes" />
      <UserRow nickName="Flavio Antunes" />
      <UserRow nickName="Flavio Antunes" />
      <UserRow nickName="Flavio Antunes" />
      <UserRow nickName="Flavio Antunes" />
      <UserRow nickName="Flavio Antunes" />
      <UserRow nickName="Flavio Antunes" />
      <UserRow nickName="Flavio Antunes" />
      <UserRow nickName="Flavio Antunes" />
      <UserRow nickName="Flavio Antunes" />
      <UserRow nickName="Flavio Antunes" />
      <UserRow nickName="Flavio Antunes" />
      <UserRow nickName="Flavio Antunes" />
      <UserRow nickName="Flavio Antunes" />
      <UserRow nickName="Flavio Antunes" />
      <UserRow nickName="Flavio Antunes" />
      <UserRow nickName="Flavio Antunes" />
      <UserRow nickName="Flavio Antunes" />
      <UserRow nickName="Flavio Antunes" />
      <UserRow nickName="Flavio Antunes" />
      <UserRow nickName="Flavio Antunes" />
      <UserRow nickName="Flavio Antunes" />
      <UserRow nickName="Flavio Antunes" />
    </Container>
  );
};

export default UserList;
