import styled from "styled-components";

export const SectionTabsWrapper = styled.div`

  .item {
    flex-basis: 500px;
    flex-shrink: 0;
    box-sizing: border-box;
    padding: 20px 24px;
    margin-right: 20px;
    border-radius: 6px;
    font-size: 17px;
    text-align: center;
    border: 0.5px solid #d8d8d8;

    ${(props) => props.theme.animation.animation}
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
      color: skyblue;
    }

    white-space: nowrap;
    cursor: pointer;
  }

  .active {
    ${(props) => props.theme.animation.animation}
    background-color: ${props => props.theme.color.secondaryColor};
    color: white;
  }
`;
