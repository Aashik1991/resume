import About from "../container/About/About";
import Contact from "../container/Contact/Contact";
import Home from "../container/Home/Home";
import Projects from "../container/Projects/Projects";


const ROUTES = {
    home: {
        name: "/",
        component: < Home />
    },
    about: {
        name: "/about",
        component: < About />
    },
    contact: {
        name: "/contact",
        component: < Contact />
    },
    projects: {
        name : "/projects",
        component: < Projects />
    }
}

export default ROUTES;