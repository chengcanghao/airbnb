import styled from "styled-components";

export const SearchTabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  .item {
    position: relative;
    font-size: 16px;
    padding: 4px;
    cursor: pointer;
    &:hover .bottom {
      position: absolute;
      bottom: 0px;
      left: 4px;
      height: 2px;
      width: 64px;
      background-color: #333;
    }
  }
`;
