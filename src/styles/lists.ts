import styled from "styled-components"
import './variables.css'

export const List = styled.ul`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 17px;
`

export const ListItem = styled.li`
    width: 100%;
    border-bottom: 1px solid;
    transition: 0.3s ease-out;
    color: var(--color-5);
    border-radius: 10px;

    &:hover{
        transform: scale(1.03);
        color: var(--color-3);
        background-color: var(--color-5);
        border-bottom: black;
    }

    header{
        display: flex;
    }
    
    .name {
        span{
            color: var(--color-2);
        }
    }

    header > span {
        font-size: 10px;
    }

   .counter {
        display: flex;
        justify-content: space-around;
        margin-bottom: 5px;
   }
`

