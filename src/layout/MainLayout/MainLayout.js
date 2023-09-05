import {Outlet} from "react-router-dom";
import {Footer, Header, Sidebar} from "../../components";
import styles from './MainLayout.module.css'

const MainLayout = () => {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className={styles.container}>
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