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

  .header-form-filters {
    padding-left: var(--size20px);

    input {
      width: 300px;
      padding: 16px 20px;
      transition: all 0.2s;
    }

    select {
      padding: 7.5px;
      box-sizing: border-box;
    }

    input,
    select {
      font-weight: 500;
      margin-right: var(--size20px);
    }
  }

  .header-apis-total {
    font-weight: 500;
    border-radius: 14px;
    background: #ddeff8;
    border: 1px solid #81c1e0;
    padding: 5px 10px;
    color: #08c;

    span {
      color: #08c;
      font-weight: 400;
      margin-left: 5px;
    }
  }
`;

export const Card = styled.div`
  box-shadow: 0 1px 2px var(--shadow);
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 20px;
  padding-bottom: 10px;

  .card-header {
    padding: 15px 15px 10px;
    display: flex;
    align-items: center;

    .api-count-container {
      width: 33px;
      height: 33px;
      border-radius: 100px;
      background: #ddeff8;
      color: #08c !important;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      font-weight: 500;
      font-size: 15px;
    }

    .card-title {
      font-weight: 500;
    }
  }
`;
