import styled, { keyframes } from "styled-components";
import steam from '../images/steam.png'

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`
export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: white;
    gap: 10px;

    .circle {
        animation: ${rotate} 1.5s infinite linear;
        border: 2px solid #c9c9c90c;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        border-top: 3px solid #66c0f4;
        
    }
`