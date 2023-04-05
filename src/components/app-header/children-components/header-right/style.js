import styled from "styled-components";

export const RightWrapper = styled.div`
    flex:1;
    color:${props => props.theme.textColor.primaryColor};
    display: flex;
    justify-content: end;
    align-items: center;
    
  
   
    .btn{
        display: flex;
        align-items: center;
        cursor: pointer;
        span{
        margin-right: 3px;
    }
    }
    .btn span{
        padding: 5px 10px;
        border-radius: 10px;
        ${props => props.theme.animation.background}
        &:hover{
            background-color: #f5f5f5;
        }

    }
    .profile{
        span{
        margin-right: 8px;
    }
        margin-right: 35px;
        border: 1px solid #dddddd;
        border-radius:18px;
        padding:5px 0px 5px 12px;
        display: flex;
        align-items: center;
        cursor: pointer;        
       ${props => props.theme.animation.boxShadow}

        &:hover{
            box-shadow: 0 2px 4px rgba(0,0,0,0.18);
        }

        .avatar{
            width: 25px;
        }
    }

`