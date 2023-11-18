import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AboutUs from "../pages/About/AboutUs";
import Courses from "../pages/Courses/Courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
          loader: () => fetch('/courses.json')
      },
      {
        path: '/courses/:id',
        element: <Courses></Courses>,
        loader:() => fetch('/courses.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/about',
        element:<AboutUs></AboutUs>
      }
    ]
  },
]);

export default router;