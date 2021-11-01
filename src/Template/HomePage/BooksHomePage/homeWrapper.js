import styled from 'styled-components';

export const HomeWrapper = styled.div `
    .slick-arrow{
        
        color: black;
        height: 25px;
        width: 20px;
        border-radius: 100px;
        
    }
    .slick-arrow:hover{
        opacity:0.5;
    }
    .slick-arrow:active{
        opacity:1;
    }
    .slick-prev:before {
        content: "<";
        color: black;
        font-size: 35px;
        position:absolute;
        right:40px;
      }
      
      .slick-next:before {
        content: ">";
        color: black;
        font-size: 35px;
        position:absolute;
        left:40px;
      }
`