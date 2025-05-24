import { Outlet } from "react-router";
import Header from "../components/Header";

const Default = () => {
    return ( 
        <>
            <Header/>
            <Outlet/>
        </>
     );
}
 
export default Default;