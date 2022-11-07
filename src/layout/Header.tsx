import { Link } from "gatsby";
import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby"
import NavBar from '../components/navBar'
import Card from "../components/card";

const Header =()=>{
return (

        <header>
                <div className="flex-container">
                {/* <h3 className="menuItem"><Link to="/">Home</Link></h3>
                <h3 className="menuItem">Systems</h3>
                <h3 className="menuItem"><Link to="/top">Top Games</Link></h3>
                <h3 className="menuItem"><Link to="/about">About</Link></h3>
                <h3 className="menuItem"><Link to="/contact">Contact Us</Link></h3> */}
                <NavBar/>
                </div>

<style jsx>
{
        `
        header{
                color:white;
                width:100%;
                position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
        }
        .flex-container{
                display: flex; 
                justify-content: space-evenly;

        }

        h3.menuItem :not(:first-child){
                        margin-left:20px;
                        
                }
                

                
        `
}
</style>
        </header>

)
}

export default Header
