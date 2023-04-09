import styled from "styled-components";

export const ViewWrapper = styled.div`
  position: relative;
  padding: 8px 0;
  .scroll {
    overflow: hidden;
  }
  .scroll-content {
    display: flex;

    ${(props) => props.theme.animation.animation}
  }

  .left {
    z-index: 9;
    position: absolute;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 0%;
    transform: translate(-50%, -50%);
    border: 0.5px solid rgb(0 0 0/0.3);
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    ${(props) => props.theme.animation.animation}
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);

    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.38);
    }
    .iconLeft {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .right {
    position: absolute;
    z-index: 9;
    width: 30px;
    height: 30px;
    top: 50%;
    right: 0%;
    transform: translate(50%, -50%);
    border: 0.5px solid rgb(0 0 0/0.3);
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    ${(props) => props.theme.animation.animation}
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.38);
    }
    .iconRight {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
