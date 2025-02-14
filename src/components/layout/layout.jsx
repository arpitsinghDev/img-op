import { Outlet } from "react-router-dom";
import Header from "./Header";  // Import Header

export default function Layout() {
    return (
        <>
            <Header /> 
            <Outlet /> 
        </>
    );
}
