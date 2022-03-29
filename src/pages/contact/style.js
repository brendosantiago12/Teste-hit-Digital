import styled from "styled-components";

export const Container = styled.section`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    padding-top: 50px;
`
export const Content = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    h2{
        font-size: 1.5rem;
        color: #FFFF;
        margin-bottom: 40px;
        padding-bottom: 4px;
        hr{
        width: 100%;
        height: 3px;
        margin: 0 auto;
        margin-top: 5px;
        border: none;
        background-color: #707070;
        position: relative;
        }
        span{
            width: 20px;
            height: 5px;
            margin-top: -4px;
            left: calc(50% - 10px);
            background: rgb(247,135,95);
            background: linear-gradient(180deg, rgba(247,135,95,1) 0%, rgba(243,83,71,1) 100%);
            position: absolute;
        }
    }
    div{
        width: 55vw;
        height: 50vh;

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 20px;
        background-color: #EA916B;
        border-radius: 10px;
    }
    p{
        text-align: left;
        color: #FFFF;
        background: transparent;
    }
`
export const Form = styled.form`
    width: 55vw;
    height: 50vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 20px;
    background-color: #EA916B;
    border-radius: 10px;
    
    div{
        width: 100%;
        height: 15%;
        padding: 0;
        margin-bottom: 20px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

`
export const Input = styled.input`
    width: 49%;
    height: 100%;
    padding: 10px;
    background: #FFFFFF;
    border: none;
    border-radius: 5px;
`     
export const Text = styled.textarea`
    width: 100%;
    height: 50%;
    border-radius: 10px;
    border: none;
    padding: 20px;
    margin-bottom: 20px;
    background-color: white;
`
export const Btn = styled.button`
    width: 200px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0.9;
    transition: all ease-in 0.13s;
    background: #373735;

    text-decoration: none;
    text-transform: uppercase;
    color: #FFFF;
    border: none;
    border-radius: 10px;
    font-size: medium;
    font-weight: 800;
    cursor: pointer;

    &:hover{
        opacity: 1;
    }
`