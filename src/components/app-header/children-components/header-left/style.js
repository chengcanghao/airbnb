import styled from "styled-components";
export const LeftWrapper = styled.div`
  flex: 1;
  color: ${(props) => props.theme.color.primaryColor};
  align-items: center;
  .logo {
    cursor: pointer;
    width: 102px;
  }
`;
