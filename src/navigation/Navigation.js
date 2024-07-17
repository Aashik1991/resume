import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import ROUTES from './Routes';
import NavSection from '../components/NavSection/NavSection';
import { MyContext } from '../context/context';

const Navigation = () => {
    const {menuToggle}= useContext(MyContext)
    return (<>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        { menuToggle && <NavSection />}
            < Routes>
                < Route path={ROUTES.home.name} element={ROUTES.home.component}></Route>
                < Route path={ROUTES.projects.name} element={ROUTES.projects.component}></Route>
                < Route path={ROUTES.about.name} element={ROUTES.about.component}></Route>
                < Route path={ROUTES.contact.name} element={ROUTES.contact.component}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Navigation;

