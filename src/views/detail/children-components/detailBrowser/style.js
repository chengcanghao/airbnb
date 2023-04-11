import styled from "styled-components";

export const DetailBrowserWrapper = styled.div`
  .detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      padding: 2px;
      width: 50%;
      height: 400px;
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
      height: 400px;
      border: 1px solid #000;

      .top {
        height: 200px;
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
        height: 200px;
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
