import React from "react";
import { Url } from "url";


export type cardParams={
name:string;
img: string;
slug: string;
releasedDate:number;
publisher:string;
generation:number;
rate:number;
};

const Card = ({cardParams}:{cardParams:cardParams})=>{
    const {name,img,slug,releasedDate,publisher,generation,rate} = cardParams;

return (
    <a className="card" href={slug}>
        <h2 className="title">{name}</h2>
        <img src={img}></img>
        <div className="info">
            <div className="infoBox">
                <p>Release Date: </p>
                <p>{releasedDate}</p>
            </div>
            <div className="infoBox">
                <p>Publisher: </p>
                <p>{publisher}</p>
            </div>
            <div className="infoBox">
                <p>Generation: </p>
                <p>{generation}</p>
            </div>
            <div className="infoBox">
                <p>Rate: </p>
                <p>{rate}</p>
            </div>
            
            </div>
        <div className="content"></div>

        <style jsx>
            {`
            
                .card{
                max-width:25%;
                display:flex;
                flex-direction:column;
                background-color:#C4DBF6;
                margin:20px;
                min-width:200px;
                text-decoration: none;
                color:black;
                font-size:1.35em;
           }
                }


                .card p{
                background-color:#C4DBF6;
                }
                .title{
                    text-align:center;
                }
                
                img{
                    max-width:100%;
                    margin:10px;
                    box-sizing: border-box;
                }
                .info{
                    padding:1em;
                    justify-content: space-between;
                    flex-direction:column;
                    display:flex
                    
                }
                .info > span {
                    margin:20px;
                    
                }

                .info > :not(:first-child){
                    margin-top:1em;
                    
                }

                hr{
                    width:100%;
                    
                    box-sizing: content-box;
                }
                .infoBox{
                    display:flex;
                    justify-content: center;
                    
                }
                .infoBox > :first-child{
                    font-weight:bolder;
                    margin-right:1em;

                }
            `}
        </style>
    </a>
)

}

export default Card;