import styled from "styled-components";

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #eee;

  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 80px;
    right: 80px;
  }
  .content {
    .top {
      display: flex;
      align-items: center;
      height: 80px;
      background-color: white;
    }
    .search-area {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 102px;
      background-color: white;
      border-bottom: 1px solid #eee;
    }
  }

  .mask {
    position: fixed;
    top: 184px;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.18);
  }
`;
