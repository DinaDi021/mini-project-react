import {Outlet} from "react-router-dom";

import {Header} from "../../components/Header/Header";
import {Sidebar} from "../../components/Sidebar/Sidebar";

const MainLayout = () => {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div style={{display: 'flex', height: '100%'}}>
                <Sidebar/>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};