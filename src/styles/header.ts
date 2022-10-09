import styled from "styled-components";

export const Headers = styled.header`
    display: flex;
    width: 100%;
    background-color: coral;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0;
    font-size: 1.8rem;
`

export const SearchContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 30%;
    height: 40px;

    input {
        width: 100%;
        height: 100%;
        padding: 10px 25px;
        border-radius: 20px;
        outline: none;
        border: none;
    }

    .search-icon {
        position: absolute;
        right: 5%;
        font-size: 2rem;
        cursor: pointer;
    }
`