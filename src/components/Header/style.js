import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-bottom: 40px;

    img{
        width: 120px;
        height: 90px;
    }
`
export const Actions = styled.div`
    width: 420px;

    display: flex;
    justify-content: space-between;
    align-items: center;

`
export const Btn = styled(Link)`
    width: 200px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0.8;
    transition: all ease-in 0.13s;
    background: rgb(247,135,95, 0.7);
    background: linear-gradient(180deg, rgba(247,135,95,1) 0%, rgba(243,83,71,1) 100%);

    text-decoration: none;
    text-transform: uppercase;
    color: #FFFF;
    border: none;
    border-radius: 5px;
    font-size: medium;
    font-weight: 800;
    cursor: pointer;

    &:hover{
        opacity: 1;
    }
`