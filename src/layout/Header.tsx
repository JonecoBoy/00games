import { Link } from "gatsby";
import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby"
import NavBar from '../components/navBar'
import Card from "../components/card";

const Header =()=>{
return (

        <header>
                <div className="flex-container">
                <NavBar/>
                </div>

<style jsx>
{ `
        
        header{
                color:white;
                width:100%;
                position: -webkit-sticky; /* Safari */
                position: sticky;
                box-sizing: content-box;
                min-width:450px;
                top: 0;
                z-index: 10;
        }
        .flex-container{
                display: flex; 
                justify-content: space-evenly;

        }

        h3.menuItem :not(:first-child){
                        margin-left:20px;
                        
                }
                

                
        `}
</style>
        </header>

)
}

export default Header
