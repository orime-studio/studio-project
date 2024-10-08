import { createBrowserRouter } from "react-router-dom";
import { CarouselComponent } from "../components/Carousel";
import Root from "../layout/root";
import About from "./About";
import AdminDashboard from "./AdminDashboard";
import Cart from "./Cart";
import Contact from "./Contact";
import CreateProduct from "./CreateProduct";
import Error from "./Error";
import LandingPage from "./LandingPage/LandingPage";
import Login from "./Login";
import OrderConfirmation from "./OrderConfirmation";

import Product from "./Product";
import Products from "./Products";
import ProtectedRouteAdmin from "./ProtectedRouteAdmin";
import ProtectedRouteUser from "./ProtectedRouteUser";
import Register from "./Register";
import EditProduct from "./UpdateProduct";
import UpdateUser from "./UpdateUser";
import UserOrders from "./UserOrders";


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
            { index: true, element: <><CarouselComponent /><Products /></> },
            { path: "/register", element: <Register /> },
            { path: "/login", element: <Login /> },
            /* {
                path: "/profile", element:
                    <ProtectedRouteUser>
                        <Profile />
                    </ProtectedRouteUser>
            }, */
            { path: "/products/:id", element: <Product /> },
            {
                path: "/admin/create-product", element:
                    <ProtectedRouteAdmin>
                        <CreateProduct />
                    </ProtectedRouteAdmin>
            },
            {
                path: "/admin/products/:id", element:
                    <ProtectedRouteAdmin>
                        <EditProduct />
                    </ProtectedRouteAdmin>
            },
           /*  {
                path: "/admin/products", element:
                    <ProtectedRouteAdmin>
                        <AdminProducts />
                    </ProtectedRouteAdmin>
            },

            { path: "/admin/users", element: <Users /> },*/

            {
                path: "/users/:id", element:
                    <ProtectedRouteUser>
                        <UpdateUser />
                    </ProtectedRouteUser>
            }, 
            {
                path: "/cart", element: <Cart />,
            },
            {
                path: "/order-confirmation/:orderId", element: < OrderConfirmation />
            },

            {
                path: "/orders", element: < UserOrders />
            },
            /* {
                path: "/osadchi-studio", element: < LandingPage />
            }, */
            /* {
                path: "/admin/analytics", element: < SalesPage />
            }, */
          /*   {
                path: "/admin/orders", element: < AdminOrders />
            }, */
            {
                path: "/admin/dashboard", element: 
                    <ProtectedRouteAdmin>
                <AdminDashboard />
                        </ProtectedRouteAdmin>
            },
            {
                path: "/contact", element: <Contact />
            },
            {
                path: "/about", element: <About />
            },
      

            
            



        ],
    },
]);