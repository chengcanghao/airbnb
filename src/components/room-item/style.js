import styled from "styled-components";

export const RoomWrapper = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.itemWidth}%;
  padding: 14px;

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
    &:hover {
      .control {
        display: flex;
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
    }
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
