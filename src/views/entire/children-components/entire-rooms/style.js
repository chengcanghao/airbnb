import styled from "styled-components";

export const RoomsWrapper = styled.div`
  padding-top: 130px;
  position: relative;
  .list {
    display: flex;

    flex-wrap: wrap;

    margin: 0 -14px;
  }
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.618);
    .progress{
      margin-top: 2px;
    }
  }
`;
