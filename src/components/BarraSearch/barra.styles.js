import styled from "styled-components";

export const BarraStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10px;

    i{
        background-color: ${(props) => props.theme.orange};
        font-size: 30px;
    }

    .input-box{
        display: flex;
        align-items: center;
        width: 420px;
        font-size: 20px;
        color: ${(props) => props.theme.brown};
        border: solid 2px ${(props) => props.theme.orange};
        border-radius: 5px;
        height: 38px;
        padding: 8px 16px;
        box-shadow: 0 0 50px 15px ${(props) => props.theme.brown};

        &::placeholder{
            color: ${(props) => props.theme.gray};
        }
    }

    .button{
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${(props) => props.theme.brown};
        background-color: ${(props) => props.theme.orange};
        height: 38px;
        width: 38px;
        padding: 10px;
        font-weight: bold;
        border: solid 1px ${(props) => props.theme.gray};
        border-radius: 5px;
    }
    `