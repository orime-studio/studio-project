import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root";
import Error from "./Error";
import LandingPage from "./LandingPage/LandingPage";
import Login from "./Login";



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
            { path: "/leads", element: <Login /> },

        ],
    },
]);