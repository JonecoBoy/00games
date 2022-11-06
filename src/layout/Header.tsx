import React from "react";


const Header =()=>{
return (

        <header>
                <div className="flex-container">
                <h3>Home</h3>
                <h3>Sistemas</h3>
                <h3>Top Jogos</h3>
                <h3>Sobre</h3>
                <h3>Contato</h3>
                </div>

<style jsx>
{
        `
        header{
                background-color:#B23850;
                color:white;
                width:100%;
        }
        .flex-container{
                display: flex; 
                justify-content: space-evenly;
                padding: 10px;

        }

        h3 :not(:first-child){
                        margin-left:20px;
                        
                }
                
        `
}
</style>
        </header>

)
}

export default Header
