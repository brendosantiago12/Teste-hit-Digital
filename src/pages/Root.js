import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Introduction from "./introduction/Introduction";
import Contact from "./contact/Contact";

const Root = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Introduction/>}/>
                <Route  path="contato" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Root;