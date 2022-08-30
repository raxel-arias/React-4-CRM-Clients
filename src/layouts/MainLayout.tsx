import {Outlet} from "react-router-dom";
import Sidebar from "../components/shared/Sidebar";

const MainLayout = (): JSX.Element => {
    return (
        <div className={"md:flex min-h-screen bg-gray-200"}>

            <Sidebar />

            <div className="md:w-3/4 p-10 md:h-screen overflow-x-hidden md:overflow-y-scroll">
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;