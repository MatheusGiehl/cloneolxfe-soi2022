import styled from "styled-components";

export const Item = styled.div` 
  a {
    display: block;
    border: 1px solid #CCC;
    margin: 10px;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    color: #000;
    background-color: #FFF;
    transition: all ease 0.2s;

    &:hover {
        background-color: #D9FFCC;
        border: 1px solid #B3FF99;
    }

    .itemImage img {
        width: 100%;
        border-radius: 5px;
    }

    .itemName {
        font-weight: bold;
    }
  }
`;