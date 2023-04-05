import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin-top: 100px;
  border-top: 1px solid #EBEBEB;

  .wrapper {
    margin: 0 auto;
    padding: 48px 24px;
  }

  .service {
    display: flex;
    justify-content:space-around;

    .item {

      .name {
        margin-bottom: 16px;
        font-weight: 700;
      }

      .list {
        .iten {
          margin-top: 6px;
          color: #767676;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .statement {
    margin-top: 30px;
    border-top: 1px solid #EBEBEB;
    padding: 20px;
    color: #767676;
    text-align: center;
  }
`