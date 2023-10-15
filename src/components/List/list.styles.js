import styled from "styled-components";

export const ListStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${(props) => props.theme.dark};
    gap: 20px;
    margin-top: 30px;

    h3{
        display: flex;
        color: ${(props) => props.theme.brown};
        align-self: center;
        justify-content: center;
    }
    ul{
        background-color: transparent;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        padding: 15px;
        width: 480px;
        min-height: 50px;
        border-radius: 5px;
        gap:25px;
    }

    input{
        display: flex;
        align-items: center;
        width: ${(props)=> props.width || '100%'};
        font-size: 20px;
        color: ${(props) => props.theme.orange};
        border: solid 2px ${(props) => props.theme.orange};
        border-radius: 5px;
        height: 38px;
        padding: 8px 16px;

        &::placeholder{
            color: ${(props) => props.theme.brown};
        }
    }
    .search-container{
        display: flex;
        justify-content: center;
        margin-top: 5px;
    }

    .search-checkbox{
        width: 20px;
        margin-left: 4px;
    }
    p{
        font-size: 14px;
        background-color: transparent;
        line-height: 24px;
        width: 80%;
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
    }

    section{
        padding: 3px 20px 3px 0;
        width: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: transparent;
    }

    button{
    width: 20%;
    background-color: transparent;
    border-radius: 10px;
    border: none;

    font-weight: 500;
    font-size: 30px;
    line-height: 24px;
    color: ${(props) => props.theme.dark};
    background: transparent;

    cursor: pointer;

    &:hover {
    opacity: 0.8;
    }
    &:active {
    opacity: 0.6;
    }

    i{
        width: 25px;
        background: transparent;
    }
    }
    `
    export const Item = styled.li`
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        padding: 15px;
        width: 480px;
        min-height: 50px;
        background: ${(props) => (props.checked ? "#e3a463" : "#debea0")};
        border-radius: 5px;
        list-style: none;
        box-shadow: 0 0 50px 15px ${(props) => props.theme.brown};
        text-decoration-line: ${(props) => (props.checked ? "line-through" : "")};
    `
    export const Spacer = styled.div`
    width: 100%;
    margin: ${(props) => props.margin || "20px"};
    `
