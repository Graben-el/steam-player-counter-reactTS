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

export const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`