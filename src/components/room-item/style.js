import styled from "styled-components";

export const RoomWrapper = styled.div`
  box-sizing: border-box;
  width: calc(20%);
  padding: 14px;

  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 90% 8px 0;
    border-radius: 15px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
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
