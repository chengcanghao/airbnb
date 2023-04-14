import styled from "styled-components";

export const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;

  .search-bar {
    position: absolute;
    width: 350px;
    height: 48px;
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
      color: #717171ff;

      ${(props) => props.theme.animation.animation}
      &:hover {
        color: ${(props) => props.theme.textColor.primaryColor};
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

  /* .search-tabs {
    display: flex;
    justify-content: center;
    .item {
      position: relative;
      font-size: 16px;
      padding: 4px;
      cursor: pointer;
      &:hover .bottom{
        position: absolute;
        bottom: 0px;
        left: 4px;
        height: 2px;
        width: 64px;
        background-color: #333;
      }
    }
  } */
  /*
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;
  */

  // .search-bar {
  //   position: absolute;
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   width: 300px;
  //   height: 48px;
  //   box-sizing: border-box;
  //   padding: 0 8px;
  //   border: 1px solid #ddd;
  //   border-radius: 24px;
  //   cursor: pointer;
  //   will-change: transform, opacity;
  //
  //
  //   .text {
  //     padding: 0 16px;
  //     color: #222;
  //     font-weight: 600;
  //   }
  //
  //   .icon {
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //     width: 32px;
  //     height: 32px;
  //     border-radius: 50%;
  //     color: #fff;
    //     background-color: ${props => props.theme.color.primaryColor};
  //   }
  // }

  .search-detail {
    position: relative;
    transform-origin: 50% 0;
    will-change: transform, opacity;

    .infos {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
    }
  }


  .detail-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .detail-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-58px);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }

  .bar-exit {
    opacity: 0;
  }
`;
