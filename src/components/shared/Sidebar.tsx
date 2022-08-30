import {Link, useLocation} from "react-router-dom";
import {homeRoute, newClientRoute} from "../../global/route-paths.global";

const Sidebar = (): JSX.Element => {
    const {pathname} = useLocation();

    const a_classes: string = ` text-white font-semibold text-2xl block mt-2 hover:text-blue-300 `;

    const highlightClass = (path: string): string => {
        return path === pathname ? 'text-blue-300' : '';
    }

    return (
        <div className={"md:w-1/4 bg-blue-900 px-5 py-10"}>
            <h2 className={"text-4xl font-black text-center text-white"}>CRM Clients</h2>

            <nav className={"mt-10"}>
                <Link to={homeRoute} className={a_classes + highlightClass(homeRoute)} >Clients</Link>
                <Link to={homeRoute + newClientRoute} className={a_classes + highlightClass((homeRoute + newClientRoute))} >New Client</Link>
            </nav>
        </div>
    )

}

export default Sidebar;