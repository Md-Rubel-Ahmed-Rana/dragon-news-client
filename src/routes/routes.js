import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import Register from "../Pages/Register/Register";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                loader: () => fetch("http://localhost:5000/news"),
                element: <Home />
            },
            {
                path: "/category/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Category />
            },
            {
                path: "/news/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`), 
                element: <News />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
        ]

    }
])