import styled from "styled-components";
import bannerImg from '@/assets/img/cover_01.jpeg'
export const HomeBannerWrapper = styled.div`
  height: 529px;
  background: url(${require("@/assets/img/cover_01.jpeg")}) center / cover;

  .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`