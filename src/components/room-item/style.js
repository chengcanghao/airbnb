import styled from "styled-components";

export const RoomWrapper = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.itemWidth}%;
  padding: 14px;
  .inner {
    width: 100%;
  }
  .slider {
    position: relative;
    &:hover {
      .control {
        display: flex;
      }
    }
  }
  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 100% 8px 0;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .control {
    display: none;
    justify-content: space-between;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    width: 100%;
    color: lightgray;
    .left {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 20%;
      cursor: pointer;
      ${(props) => props.theme.animation.animation}
      &:hover {
        background: rgba(0, 0, 0, 0.05);
        color: white;
      }
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 20%;
      cursor: pointer;
      ${(props) => props.theme.animation.animation}

      &:hover {
        background: rgba(0, 0, 0, 0.05);
        color: white;
      }
    }
  }
  
  .indicator {
      position: absolute;
      z-index: 9;
      width: 30%;
      left: 0;
      right: 0;
      bottom: 10px;
      margin: 0 auto;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;

        .dot {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;
          &.active {
            width: 8px;
            height: 8px;
          }
        }
      }
    }
  .description {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    color: ${(props) => props.verifyColor};
  }

  .name {
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    .MuiRating-icon {
      margin-left: -1px;
    }
  }
`;
