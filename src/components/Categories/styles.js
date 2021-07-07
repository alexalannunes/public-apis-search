import styled from "styled-components";

export const CategoriesContainer = styled.aside`
  position: fixed;
  left: 0;
  bottom: 0;
  top: var(--header-height);
  background: #fff;
  width: var(--categories-width);
  padding: 10px 0px;
  overflow-y: scroll;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  ul li span {
    display: block;
    padding: 10px 20px;
    border-radius: 0 100px 100px 0;
    transition: all 0.2s ease-in;
    cursor: pointer;
    font-weight: 500;
    border: 1px solid transparent;

    &:hover {
      background: #ddeff8;
      color: #222;
      border: 1px solid #81c1e0;
      color: #08c;
    }
  }

  ul li span.active {
    color: #08c;
    background: #ddeff8;
    border: 1px solid #81c1e0;
  }
`;
