import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;

  align-items: center;

  height: 80px;

  border-bottom: 1px solid #eee;

  background-color: white;

  &.fixed{
    position: fixed;
    z-index: 99;
    top: 0;
    left: 80px;
    right: 80px;
  }
`
