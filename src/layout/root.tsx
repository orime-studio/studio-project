import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

/* import Header from "../routes/Header/Header"; */


const Root = () => {

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <Outlet />
                
            </main>
            <Footer />

        </div>
    );
};

export default Root;