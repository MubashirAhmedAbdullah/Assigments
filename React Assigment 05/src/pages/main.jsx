import { Outlet } from "react-router";
import Header from "../components/header";



function Dashboard(){
    return(
        <div>
            <Header />


            <Outlet />

            
        </div>
    )
}


export default Dashboard;