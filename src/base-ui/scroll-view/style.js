import styled from "styled-components";

export const ViewWrapper = styled.div`
  position: relative;

  overflow: hidden;

  .left {
    //position: absolute;
    //top: 8px;
    //left: 0;
    //
  }

  .right {
    //position: absolute;
    //top: 8px;
    //right: 0;
  }

  .scroll-content {
    display: flex;

    ${(props) => props.theme.animation.animation}
  }
`;
