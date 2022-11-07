import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { GatsbyNode } from "gatsby";
import "./styles.css";

const Layout =({children}:{children:ReactNode})=>{
return(
    <>
    <Header/>
    <div className="main-content">
        {children}
    </div>
    <Footer/>

    <style jsx>
        {`
            margin:50px;
            .main-content{
                display:block;
            }
            div.main-content > *{
                margin:200px
            }
        `}
        
    </style>
    </>
)

}


export default Layout
