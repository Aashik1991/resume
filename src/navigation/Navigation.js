import React from 'react'
import { BrowserRouter, Router, Route, Routes, } from 'react-router-dom';
import ROUTES from './Routes';


const Navigation = () => {
    return (
        <BrowserRouter>
            < Routes>
                < Route path={ROUTES.home.name} element={ROUTES.home.component}></Route>
                < Route path={ROUTES.projects.name} element={ROUTES.projects.component}></Route>
                < Route path={ROUTES.about.name} element={ROUTES.about.component}></Route>
                < Route path={ROUTES.contact.name} element={ROUTES.contact.component}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;

