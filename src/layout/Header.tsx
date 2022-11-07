import { Link } from "gatsby";
import React from "react";


const Header =()=>{
return (

        <header>
                <div className="flex-container">
                <h3 className="menuItem"><Link>Home</Link></h3>
                <h3 className="menuItem">Systems</h3>
                <h3 className="menuItem">Top Games</h3>
                <h3 className="menuItem">About</h3>
                <h3 className="menuItem">Contact Us</h3>
                </div>

<style jsx>
{
        `
        header{
                background-color:#B23850;
                color:white;
                width:100%;
                display:sticky;
                min-width:400px;
        }
        .flex-container{
                display: flex; 
                justify-content: space-evenly;
                padding: 10px;

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
