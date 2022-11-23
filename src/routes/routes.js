import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                loader: () => fetch("https://dragon-news-server-eight.vercel.app/news"),
                element: <Home />
            },
            {
                path: "/category/:id",
                loader: ({ params }) => fetch(`https://dragon-news-server-eight.vercel.app/category/${params.id}`),
                element: <Category />
            },
            {
                path: "/news/:id",
                loader: ({ params }) => fetch(`https://dragon-news-server-eight.vercel.app/news/${params.id}`),
                element: <PrivateRoute><News /></PrivateRoute>
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