import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "./Main/Main";
import Home from "./Pages/Home";
import About from './Pages/About/About'
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
            path: '/projects',
            element: <Projects></Projects>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        }
        
      ]
    },
  ]);

  


export default router;
