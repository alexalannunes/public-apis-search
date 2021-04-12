import styled from "styled-components";

export const CategoriesContainer = styled.aside`
  position: fixed;
  left: 0;
  bottom: 0;
  top: var(--header-height);
  background: var(--bg);
  width: var(--categories-width);
  padding: 10px 5px;
  overflow-y: scroll;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  ul li span {
    display: block;
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.2s ease-in;
    cursor: pointer;
    font-weight: 500;

    &:hover {
      background: #ddd;
      color: #222;
    }
  }

  ul li span.active {
    color: #222;
    background: #ddd;
  }
`;
