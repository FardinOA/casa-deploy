import React from "react";
import { Outlet } from "@remix-run/react";
import { Header } from "~/components/common/Header";
import Footer from "~/components/common/Footer";

const Layout: React.FC = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
