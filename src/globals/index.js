import styled from "styled-components";

export const Header = styled.div`
  border-bottom: 1px solid #ccc;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background: #fff;
  display: flex;
  align-items: center;

  .header-categories-title {
    padding: 0 var(--size20px);
    height: 100%;
    display: flex;
    align-items: center;
    width: var(--categories-width);
    border-right: 1px solid #ccc;
    font-weight: 500;
    font-size: 18px;
  }
`;

export const Card = styled.div`
  box-shadow: 0 1px 2px var(--shadow);
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 20px;
  padding-bottom: 10px;

  .card-header {
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
