import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root";
import AdminMessages from "./AdminMessage";
import Error from "./Error";
import LandingPage from "./LandingPage/LandingPage";



export const router = createBrowserRouter([

    {
        path: "/studio",
        element: <LandingPage/>,
        errorElement: <Error />,
    },

    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,

        children: [
            { index: true, element: <LandingPage /> },
            { path: "/leads", element: <AdminMessages/> },

        ],
    },
]);