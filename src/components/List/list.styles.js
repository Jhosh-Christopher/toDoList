import styled from "styled-components";

export const ListStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${(props) => props.theme.dark};
    gap: 20px;
    margin-top: 30px;

    
    ul{
        width: 480px;
        background-color: ${(props) => props.theme.brown};
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        padding: 15px;
        width: 480px;
        min-height: 50px;
        border-radius: 5px;

    }

    p{
        color: ${(props) => props.theme.dark};
        font-size: 12px;
        background-color: transparent;
        line-height: 24px;
        text-decoration-line: ${(props) => (props.checked ? "line-through" : "")};
        color: ${(props) => (props.checked ? "#e3a463" : "#1c2229")};
        width: 80%;
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
    }

    section{
        padding: 3px 20px 3px 0;
        width: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${(props) => props.theme.brown};
    }

    button{
    width: 10%;
    background-color: transparent;
    border-radius: 10px;
    border: none;

    font-weight: 500;
    font-size: 30px;
    line-height: 24px;
    color: ${(props) => props.theme.dark};

    cursor: pointer;

    &:hover {
    opacity: 0.8;
    }
    &:active {
    opacity: 0.6;
    }

    i{
        width: 25px;
        background-color: ${(props) => props.theme.brown};
    }
    }
    `
    export const Item = styled.li`
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        padding: 15px;
        width: 480px;
        min-height: 50px;
        background: ${(props) => (props.checked ? "#e3a463" : "#debea0")};
        border-radius: 5px;
        list-style: none;
    `

