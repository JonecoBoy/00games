import { Link } from "gatsby";
import React from "react";
import { Url } from "url";


export type cardParams={
name:string;
img: string;
slug: string;
releaseDate:number;
developer:string;
generation:number;
rate:number;
fields:any;
type:string;
genre?:string;
screenshots?:Array<string>;
logo?:string;
video?:string;
};

const Card = ({cardParams}:{cardParams:cardParams})=>{
    const {name,img,releaseDate,developer,generation,rate,slug,genre,type} = cardParams;
    let path = ``
    if(type==='System'){
        path = `/systems/${slug}`
    }else if(type==='Game'){
        path = `/games/${slug}`
    }
    

return (
    
    <Link className="card" to={path}>
    
        <h2 className="title">{name}</h2>
        <img src={img}></img>
        <div className="info">
            <div className="infoBox">
                    <p>Publisher: </p>
                    <p>{developer}</p>
            </div>
            <div className="infoBox">
                <p>Release Date: </p>
                <p>{releaseDate}</p>
            </div>
            <div className="infoBox">
                <p>genre: </p>
                <p>{genre}</p>
            </div>
            <div className="infoBox">
                <p>Rate: </p>
                <p>{rate}</p>
            </div>
            
            </div>
        <div className="content"></div>

        <style jsx global>
            {`
            
                .card {
                max-width:25%;
                border-radius:20px;
                display:flex;
                flex-direction:column;
                background-color:#C4DBF6;
                margin:20px;
                min-width:200px;
                text-decoration: none;
                color:black;
                font-size:1.35em;
                justify-content:center;
                text-align: center;
           }
                }
                .card img{
                    margin: auto;
                    margin-top: 20px;
                    display: block;
                    max-width:90%;
                }


                .card p{
                background-color:#C4DBF6;
                }
                .title{
                    text-align:center;
                    margin-top:10px;
                }
                
                img{
                    max-width:250px;
                    margin:10px;
                    box-sizing: border-box;
                    justify-content:center;
                    text-align:center;
                }
                .info{
                    padding:1em;
                    justify-content: space-between;
                    flex-direction:column;
                    display:flex
                    max-
                    
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
                .infoBox >p{
                    display: inline-grid;
                    max-width:100%;
                    justify-content: center;
                    
                }
                .infoBox > :first-child{
                    font-weight:bolder;
                    margin-right:1em;

                }
            `}
        </style>
    </Link>
    
)

}

export default Card;