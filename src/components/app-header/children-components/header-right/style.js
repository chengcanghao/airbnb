import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  color: ${(props) => props.theme.textColor.primaryColor};
  display: flex;
  justify-content: flex-end;
      //margin-right: auto;
  align-items: center;

  .btn {
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      margin-right: 3px;
    }
  }
  .btn span {
    padding: 10px 10px;
    border-radius: 40px;
    &:hover {
      background-color: #f5f5f5;
    }
  }
  .profile {
    position: relative;
    .user {
      border: 1px solid #dddddd;
      border-radius: 18px;
      display: flex; 
      padding: 5px 0px 5px 12px;
      align-items: center;
      cursor: pointer;
      ${(props) => props.theme.animation.animation}
      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
      }  

      .avatar {
        width: 25px;
      }
      .menu,
      .avatar {
        margin-right: 8px;
      }
    }
    .panel {
      background-color: white;
      position: absolute;
      width: 230px;
      border: 1px solid #ddd;
      right: 0;
      top: 45px;
      border-radius: 15px;
      .bottom,
      .top {
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        .item {
          cursor: pointer;
          padding: 14px 18px;
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
      .top {
        border-bottom: 1px solid #dddddd;
      }
    }
  }
`;
