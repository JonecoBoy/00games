import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { GatsbyNode } from "gatsby";
import "./styles.css";

const Layout =({children}:{children:ReactNode})=>{
return(
    <>
    <Header/>
    <body>{children}</body>
    <Footer/>

    <style jsx>
        {`
            margin:50px;
        `}
    </style>
    </>
)

}

export default Layout
