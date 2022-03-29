import React from "react";

import { Wrapper, Actions, Btn } from './style';
import logo from "../../assets/logo-hitDigital-preview.png";

const Header = () => {
    return(
        <Wrapper>
            <img src={logo} alt="hitDigital"/>
            <Actions>
                <Btn to="/">introdução</Btn>
                <Btn to="/contato">contato</Btn>
            </Actions>
        </Wrapper>
    ) 
}
export default Header;