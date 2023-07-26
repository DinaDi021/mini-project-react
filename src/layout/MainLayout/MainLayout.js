import {Outlet} from "react-router-dom";
import {Footer, Header, Sidebar} from "../../components";

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
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export {MainLayout};