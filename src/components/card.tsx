import { Star, StarHalf, StarOutline } from "@mui/icons-material";
import { Link } from "gatsby";
import { GatsbyImage,IGatsbyImageData, getImage } from "gatsby-plugin-image";
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
totalCount?:number;
systemImage?:IGatsbyImageData;
gameImage?:IGatsbyImageData;
genre?:string;
screenshots?:Array<string>;
logo?:string;
video?:string;
};

const Card = ({cardParams}:{cardParams:cardParams})=>{
    const totalStars:number = 5;
    const {name,releaseDate,developer,generation,rate,slug,genre,type,systemImage,gameImage,totalCount} = cardParams;
    
    let path = ``
    if(type==='System'){
        path = `/systems/${slug}`
    }else if(type==='Game'){
        path = `/games/${slug}`
    }
    
    const size = 600;
    
    const image = systemImage?getImage(systemImage as any) : getImage(gameImage as any)
return (
    
    <Link className="card" to={path}>
        
        <h2 className="title">{name}</h2>
        <GatsbyImage image={image as IGatsbyImageData} alt={name}/>
        <div className="info">
        {type==='System'?
            <div className="infoBox">
                    <p>Games: </p>
                    <p>{totalCount ?? 0}</p>
            </div>:null}
        {generation?
            <div className="infoBox">
                    <p>Gen: </p>
                    <p>{generation}</p>
            </div>:null}
            {developer?
            <div className="infoBox">
                    <p>Developer: </p>
                    <p>{developer}</p>
            </div>:null}
            {releaseDate?<div className="infoBox">
                <p>Release Date: </p>
                <p>{releaseDate}</p>
            </div>:null}
            
            {genre?<div className="infoBox">
                <p>genre: </p>
                <p>{genre}</p>
            </div>:null}
            
            {rate?<div className="infoBox">
                <p>Rate: </p>
                <span>
                  {Array.from({length:Math.floor(rate)},(_,index)=>{
                    return <Star key={index}/>
                  })}
                  { rate % Math.floor(rate)? <StarHalf/>:null}
                  {Array.from({length:totalStars - (Math.ceil(rate)) },(_,index)=>{
                                      return <StarOutline key={index}/>
                                    })}
                </span>
            </div>:null}
            
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

                a.card:hover {
                    color: #03172e;
                    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
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