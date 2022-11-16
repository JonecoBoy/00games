import * as React from "react"
import { graphql, HeadFC, HeadProps, Link, PageProps } from "gatsby"
import Layout from "../../layout/Layout";
import {Undo} from '@mui/icons-material/';
import { MetaHead } from "../../components/MetaHead";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

const gamesPage = ({data} : PageProps<any>) => {
    const game = {...data.game.frontmatter,...data.game.fields}
    game.html = data.game.html
    const size=700;
    const image = getImage(game.gameImage as IGatsbyImageData);


    return(
        <>
        <Layout>
        <Link to ={`/systems/${game.system}`}><button><Undo/>Back</button></Link>
        <h1>{game.name}</h1>
          <div className="technical">
          <GatsbyImage image={image as any} alt={game.name}/>
            {/* <img src ={`http://localhost:8000/static/fd5a3e12bb854711f3539a8aeac80dd9/febde/twisted%20metal.webp`}></img> */}
            <div className="text">
            <p>Release Date: {game.releaseDate}</p>
            <p>Developer: {game.developer}</p>
            <p>Platforms: {game.platforms}</p>
            <p>Genre: {game.genre}</p>
            <p>Mode: {game.mode}</p>
            <p>Rate: {game.rate}</p>
    
            </div>
            </div>
            <div className="review">
            
            <div className="post-content">
            <div className="system-review" dangerouslySetInnerHTML={{__html:game.html}}></div>
            </div>
            
    
    
          </div>
          </Layout>
          <style jsx global>
          {`
  
        .gatsimg{
            max-width: 100%;
              height: auto;
              margin:auto;
        }
      .drop-cap {
          position: relative;
          display: block;
          float: left;
          line-height: 1;
          font-family: Georgia,serif !important;
          font-weight: 400 !important;
          font-size: 60px !important;
          font-family: Georgia,serif;
          font-weight: 700;
          margin-right: 5px;
      }
  
        .post-content {
          column-count: 2;
          column-gap: 50px;
          column-rule-color: rgba(40, 40, 50, 1);
          column-rule-width: 1px;
          column-rule-style: solid;
          /* text-indent: 10px; */
      }
  
      .post-content > p :nth-child(n+3){
        text-indent: 20px;
      }
  
          h1{
            text-align:center;
            justify-content:center;
          }
  
          h3 {
          color: rgba(255, 255, 255, 1);
          text-transform: uppercase;
          background: rgba(81, 98, 213, 1);
          padding: 6px;
          padding-right: 10px;
          padding-left: 10px;
          margin-bottom: 15px;
          display: inline-block;
            }
            p{
              margin-bottom:10px;
            }
  
            .text{
              margin-left:1em;
              vertical-align: middle;
              border: 4px solid #C4DBF6;
              align-self:center;
            }
            .technical p{
              font-size:2.5em;
              
            
            }
  
            .technical{
              
              display:flex;
              flex-direction:row;
              justify-content:center;
              flex-wrap:wrap;
              height:100%;
    
              border-bottom: 4px solid #C4DBF6;
              padding:20px;
              
            }
  
            .review{
              margin-top:1em;
              display:grid;
              flex-direction:row;
              justify-content:flex-start;
              flex-wrap:wrap;
              padding:20px;
              min-width:600px;;
              
            }
            
          `}
      </style>
      </>
    )
}

export const Head: HeadFC = ({ data }: HeadProps) => 
 {
  const { name } = (data as any).game.frontmatter;
  const { system } = (data as any).game.fields;
  return <MetaHead title={`00Games - ${name}`} description={`${name} for ${system}`} />;
 }

export const pageQuery = graphql`
  query ($id: String!) {
    game: markdownRemark(id: {eq: $id}) {
        html
    fields {
      system
      slug
    }
    frontmatter {
      video
      type
      releaseDate
      rate
      name
      logo
      generation
      developer
      platforms
      genre
      mode
      screenshots
      gameImage {
        childImageSharp {
          gatsbyImageData(
            formats: [JPG, WEBP]
            height: 600
            quality: 10
            
          )
        }
      }
    }
  }
  },
`

export default gamesPage