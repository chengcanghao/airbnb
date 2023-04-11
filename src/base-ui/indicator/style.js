import styled from "styled-components";

export const IndicatorWrapper = styled.div`

overflow: hidden;

.i-content{
    display: flex;    
    position: relative;
    ${props=>props.theme.animation.animation}
> * {
    flex-shrink: 0;
}
}

`