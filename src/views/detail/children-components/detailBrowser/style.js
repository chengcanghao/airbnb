import styled from "styled-components";

export const DetailBrowserWrapper = styled.div`
  .detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      padding: 2px;
      width: 50%;
      border: 1px solid #000;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .right {
      padding: 2px;
      width: 50%;
      border: 1px solid #000;

      .top {
        display: flex;
        justify-content: space-between;
        div{
            padding: 1px;
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        div{
            padding: 1px;
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

      }
    }
  }
`;
