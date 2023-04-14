import styled from "styled-components";

export const PictureBrowserWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #333;
  color: white;
  .top {
    position: relative;
    height: 100px;
    width: 100%;
    .close {
      position: absolute;
      top: 60%;
      right: 15%;
      cursor: pointer;
    }
  }
  .slider {
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: column;
    align-items: center;

    .item {
      flex: 1;
      overflow: hidden;
      position: relative;
      width: 100% !important;
      max-width: 150vh !important;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
        object-fit: cover;
      }
    }
    .pic-enter {
      transform: translate( ${props=>props.isRight? "100%":"-100%"});
      opacity: 0;
      transition: all 0.2s cubic-bezier(0.5, 1, 0.89, 1);
    }
    .pic-enter-active {
      transform: translate(0);
      opacity: 1;
    }
    .pic-exit {
      opacity: 1;
    }
    .pic-exit-active {
      opacity: 0;
      transition: all 0.2s cubic-bezier(0.5, 1, 0.89, 1);
    }
    .control {
      position: absolute;
      z-index: 99;
      top: 50%;
      display: flex;
      width: 100%;
      justify-content: space-between;        
      cursor: pointer;

      .left {
        margin-left: 10%;
        cursor: pointer;
      }
      .right {
        margin-right: 10%;
        cursor: pointer;
      }
    }
  }
  .indicator {
    height: 100px;
    width: 80%;
    margin: 0 auto;
    margin-top: 20px;
    overflow: hidden;
    img {
      height: 67px;
      object-fit: cover;
      opacity: 0.5;
    }
  }
`;
