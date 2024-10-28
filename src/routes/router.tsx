import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root";
import AdminMessages from "./AdminMessage";
import Error from "./Error";
import LandingPage from "./LandingPage/LandingPage";
import ProtectedRouteAdmin from "./ProtectedRouteAdmin";
import Login from "./Login";
import LandingPageHeb from "./LandingPageHebrew/LandingPageHebrew";



export const router = createBrowserRouter([

    {
        path: "/studio",
        element: <LandingPage />,
        errorElement: <Error />,
    },

    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,

        children: [
            { index: true, element: <LandingPage /> },
            {path: "/heb", element: <LandingPageHeb />},
            {
                path: "/leads", element: <ProtectedRouteAdmin>
                    <AdminMessages />
                </ProtectedRouteAdmin>
            },
            {
                path: "/login", element: <Login />
            }

        ],
    },
]);