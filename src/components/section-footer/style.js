import styled from "styled-components";

export const SectionFooterWrapper = styled.div`
  margin-top: 10px;
  display: flex;

  .info {
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
    .more {
      margin-right: 5px;
      font-weight: 700;
      .name {
        color: ${(props) => props.theme.color.secondaryColor};
      }
    }
  }
`;
