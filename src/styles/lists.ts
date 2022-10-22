import styled from "styled-components"

export const List = styled.ul`
    width: 100%;
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    `

export const ListItem = styled.li`
    width: 100%;
    border-bottom: 1px solid;

    transition: 0.3s ease-in-out;

    &:hover{
        transform: scale(1.04);

    }

    header{
        display: flex;
    }
    
    .name {
        span{
            color: red;
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

