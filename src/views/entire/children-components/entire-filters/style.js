import styled from "styled-components";

export const FiltersWrapper = styled.div`
  position: fixed;
  top: 81px;
  left: 80px;
  right: 80px;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  background-color: #fff;

  .filter {
    display: flex;

    .item {
      margin: 0 4px 0 8px;
      padding: 6px 12px;
      border: 1px solid #dce0e0;
      border-radius: 4px;
      color: #484848;
      cursor: pointer;

      &.active {
        background: #008489;
        border: 1px solid #008489;
        color: #ffffff;
      }
    }
  }
`;
