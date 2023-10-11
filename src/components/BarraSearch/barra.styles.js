import styled from "styled-components";

export const BarraStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10px;

    .input-box{
        width: 420px;
        display: flex;
        font-size: 20px;
        color: ${(props) => props.theme.brown};
        border: solid 3px ${(props) => props.theme.orange};
        border-radius: 5px;
        height: 38px;
        padding: 8px 16px;
        align-items: center;
    }

    .button{
        display: flex;
        height: fit-content;
        width: fit-content;
        align-items: center;
        justify-content: center;
        /* padding: 10px; */
        color: ${(props) => props.theme.brown};
        background-color: ${(props) => props.theme.orange};
    }

    .BtnSvg{
        width: 30px;
        height: 30px;
        flex-shrink: 0;
        border-radius: 15px;
    }
    `