import styled from "styled-components";

export const CenterWrapper = styled.div`
  .search-bar {
    width: 350px;
    height: 46px;
    border: 1px solid #ddd;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
    .textarea span {
      padding: 0 14px;
      border-right: 1px solid #ddd;
      color:#717171ff;
      ${(props) => props.theme.animation.animation}
      &:hover{
        color: ${props=>props.theme.textColor.primaryColor};
        }
    }
    ${(props) => props.theme.animation.animation}

    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    }

    .searchBtn {
      position: relative;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.color.primaryColor};
      .logo {
        color: white;
        position: absolute;
        top: 10px;
        left: 10px;
      }
    }
  }
`;
