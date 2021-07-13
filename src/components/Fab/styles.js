import styled from "styled-components";

export const FABButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  border-radius: 50%;
  border: none;
  height: 40px;
  width: 40px;
  background: #fff;
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  outline: none;
  transition: transform 0.2s;
  transform: scale(0);

  &.active {
    transform: scale(1);
  }

  &:active {
    transform: scale(0.9);
  }
`;
