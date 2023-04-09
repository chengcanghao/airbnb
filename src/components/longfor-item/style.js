import styled from "styled-components";

export const ItemWrapper = styled.div`
  padding: 0 14px;
  position: relative;
  .cover {
    width: 100%;
    border-radius: 2px;
  }
  .detail {


    color: white;

    display: flex;

    flex-direction: column;

    align-items: center;

    position: absolute;

    top: 75%;

    left: 50%;

    transform: translatex(-50%);

    font-size: 12px;
  }
`;
