import React, {useState} from "react";

import Header from "../../components/Header/Header";
import { Container, Content, Form, Input, Text, Btn } from './style';

const initialForm = {
    name: '',
    email: '',
    message: ''
};
const Contact = () => {
    const [DataForm, setDataForm] = useState(initialForm)

    const handleChange = (event) => {
        const {name, value} = event.target;
        setDataForm({...DataForm, [name]: value})
    }
    const Reset = () => setDataForm(initialForm);
    console.log(DataForm);
    return(
        <Container>
            <Header/>
            <Content>
                <h2>
                    Contato
                    <hr/>
                    <span></span>
                </h2>
                <Form>
                    <div>
                        <Input type="text" placeholder="Nome*" name="name" onChange={handleChange} />
                        <Input type="email" placeholder="E-mail*" name="email" onChange={handleChange} />
                    </div>
                    <Text placeholder="Mensagem*" name="message" onChange={handleChange} />
                    <Btn onClick={Reset}>Enviar</Btn>
                </Form>
            </Content>
        </Container>
    )
}
export default Contact;