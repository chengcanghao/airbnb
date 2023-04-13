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
    width: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .item {
      flex: 1;
      img {
        width: 100%;
        height: 100%;
        object-fit: scale-down;
      }
    }
    .control {
      position: absolute;
      top: 50%;
      left: 0;
      display: flex;
      width: 100%;
      justify-content: space-between;
      .left {
        margin-left: 5%;
        cursor: pointer;
      }
      .right {
      
        margin-right: 5%;
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
