import styled from "styled-components";

export const ContainerHeader = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 13px 15px;
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 18;
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
