
import styled from 'styled-components';
import img from 'C:/Users/savan hapani/react/intership/main_project/src/1961826_8ff8_2.jpg';




export const CardBox=styled.div`
       width: 280px;
       height: 280px;
       transition:all 0.6s ease;
       transform-style: preserve-3d;
       text-align:center;
       margin:28px;
       
       


       &:hover{
           transform: rotateY(180deg);
       }

       .back{
        transform: rotateY(180deg);
        background: linear-gradient(to right bottom, rgba(41,152,255,0.85), rgba(86,67,250,0.85));
        color:white
       }

       .front
       {
           background: linear-gradient(to right bottom, rgba(41,152,255,0.85), rgba(86,67,250,0.85)), url(${img});
           background-size: cover;
           color:white;
       }

       .front, .back{
           position: absolute;
           width: 280px;
           height: 280px;
           backface-visibility:hidden;
           border-radius: 15px;
           display:flex;
           align-items: center;
           justify-content:center;
       }

       


    `;
    