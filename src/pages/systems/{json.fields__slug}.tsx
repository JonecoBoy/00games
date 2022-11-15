import * as React from "react"
import { graphql, HeadFC, HeadProps, Link, PageProps } from "gatsby"
import Layout from "../../layout/Layout"
import Card from "../../components/card"
import { cardParams } from "../../components/card"


import { Alert } from "@mui/material"
import { Star, StarHalf, StarOutline, Undo } from "@mui/icons-material"
import { MetaHead } from "../../components/MetaHead"


type DataProps = {
  allJson: {
    nodes:[
      {
      system:cardParams
    }
  ]
  }
}

const IndexPage = ({data} : PageProps<DataProps>) => {

const system = (data as any).system;
const games:Array<any> = (data as any).games.nodes;
const totalStars:number = 5;

// retirar dos sub parametros
const systemInfo = {...(data as any).systemInfo.frontmatter, ...(data as any).systemInfo.fields}
systemInfo.html = (data as any).systemInfo.html;

//COMPONENTIZAR

  return (
    <>
    <Layout> 
      <Link to ="/"><button><Undo/>Back</button></Link>
    <div className="system-info">
        <img className="system-image" src={systemInfo.img}></img>
        <div className="system-data">

            <table className="system-table">
              <tbody>
              <tr>
                <th>Publisher: </th>
                <td>{systemInfo.developer}</td>
              </tr>
              <tr>
              <th>Release Date: </th>
                <td>{systemInfo.releaseDate}</td>
              </tr>
              <tr>
              <th>Generation: </th>
                <td>{systemInfo.generation}</td>
              </tr>
              <tr>
              <th>Rate: </th>
                <td>
                  {Array.from({length:Math.floor(system.rate)},()=>{
                    return <Star/>
                  })}
                  { system.rate % Math.floor(system.rate)? <StarHalf/>:null}
                  {Array.from({length:totalStars - (Math.ceil(system.rate)) },()=>{
                                      return <StarOutline/>
                                    })}
                </td>
              </tr>
              </tbody>
          </table>
      </div>
    </div>
      <div className="system-review" dangerouslySetInnerHTML={{__html:systemInfo.html}}></div>

<hr></hr>

      <div className="cards">
        
        {
         !games || games.length<1 
         ?
         <Alert severity="error"> No Games for this System in the Database!</Alert>
         :
         games.map((item,index)=>{
          const game = {...item.frontmatter,...item.fields}
          return(
                  <Card key={index} cardParams={game}/>
                )
        })
              
        }
        
      </div>
      </Layout>
      {/* se nao meter global nao entra nada que pega o css pelo dangerous set */}
    <style jsx global>
        {`
          .cards{
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            flex-wrap:wrap;
            margin-top:20px;
            
          }

          .system-review {
            column-count:2;
            columns: 20%, 2;
            column-gap: 50px;
            column-rule-color: rgba(40, 40, 50, 1);
            column-rule-width: 2px;
            column-rule-style: solid;
      
            margin-bottom: 2rem;
            /* text-indent: 10px; */
            
          }
          .system-info {
             text-align:center;
              
          }

          .system-info img{
     
            max-width: 100%;
              height: auto;
              margin:auto;
          }
          .system-data{
              flex:1;
              display:flex;
              justify-content:space-evenly;
              text-align:left;
              flex-direction:row;
              margin:20px 20px 20px 20px;
          }

          .info-box span{
            padding-top:200px;
          }
          hr{
            border: 1px solid  rgba(40, 40, 50, 1);
          }

          .system-review > h3{
            color: rgba(255, 255, 255, 1)!important;
            text-transform: uppercase;
            background-color: rgba(81, 98, 213, 1);
            padding: 6px;
            padding-right: 10px;
            padding-left: 10px;
            margin: 15px 0px 15px 0px;
            display: inline-block;
          }
          .system-review >p{
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
          span.title{
            font-size:2.05rem;
          }
          span:not(.title){
            font-size:1.4rem;
          }

          .system-table th{
            font-size:2.1em;
          }
          .system-table td{
            font-size:1.4em;
          }         
          
        `}
    </style>
</>
    // por hover nos cards
  )

}

export default IndexPage

export const Head: HeadFC = ({ data }: HeadProps) => 
 {
  const { name , developer} = (data as any).system;
  return <MetaHead title={`00Games - ${developer} ${name}`} description={`VideoGames Database for ${developer} ${name}`} />;
  // colocar img no meta
 }



export const pageQuery = graphql`
  query ($id: String!,$system: String) {
    system: json(id: {eq: $id}) {
      fields {
        slug
      }
      type
      releaseDate
      rate
      name
      img
      developer
    },
    games:
    allMarkdownRemark(filter: {fields: {system: {eq: $system}}, frontmatter: {type: {eq: "Game"}}}) {
      
    nodes {
      frontmatter {
        genre
        mode
        platforms
        name
        developer
        rate
        releaseDate(locale: "pt-br", formatString: "")
        type
        img
      }
      fields {
        system
        slug
      }
    }
  }
  systemInfo:
  markdownRemark(fields: {system: {eq: $system}},frontmatter: {type: {eq: "System"}}) {
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
      img
      generation
      developer
    }
  }
  },
`

