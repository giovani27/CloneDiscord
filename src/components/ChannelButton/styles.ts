import styled from "styled-components";
import { Hashtag } from "styled-icons/heroicons-outline";
import { PersonAdd, Settings } from "styled-icons/material";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;
  background: transparent;
  transition: background-color 0.2s;

  > div {
    display: flex;
    align-items: center;
  }
  > div span {
    margin-left: 5px;
    font-size: 15px;
    color: var(--senary);
  }
  &.active,
  &:hover {
    background: var(--quinary);

    > div span {
      color: white;
    }
  }
`;

export const HashTagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
`;
export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;
  color: var(--symbol);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;
export const SettingIcon = styled(Settings)`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  color: var(--symbol);
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;