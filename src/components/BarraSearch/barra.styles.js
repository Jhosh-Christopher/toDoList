import styled from "styled-components";

export const BarraStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

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
        gap: 436px;
    }
    `