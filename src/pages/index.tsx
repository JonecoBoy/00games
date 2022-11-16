import * as React from "react"
import { graphql, HeadFC, HeadProps, PageProps } from "gatsby"
import Layout from "../layout/Layout"
import Card from "../components/card"
import { cardParams } from "../components/card"
import { MetaHead } from "../components/MetaHead"
import { Alert } from "@mui/material"



  type DataProps = {
      allJson: {
        nodes:[
          {
          system:cardParams
        }
      ]
      }
  }

const IndexPage = ({data} : {data:PageProps<DataProps>}) => {
  let systems = (data as any).info.nodes;
  const counters = (data as any).count.group;

systems.forEach((system:any)=>{
  counters.forEach((counter:any)=>{
    
    if(system.fields.slug == counter.fieldValue){
      
      system.totalCount=counter.totalCount ?? 0
    }
  })
  

})
  


  return (
    <>
    <Layout>
      {/* todo setState de uma mensagem para aparecer quando enviar mensagem */}
    {/* {message && <Alert variant="filled" severity="success">{message}</Alert>} */}
      <h1>Sistemas</h1>
      <div className="cards">
        {systems.map((item:any,index:number)=>{
          let system:cardParams = item
          system = {...item,...item.fields}
          return <Card key={index} cardParams={system}></Card>
        })}
      </div>
      
      </Layout>
    <style jsx>
        {`
          .cards{
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            flex-wrap:wrap;
            flex-grow: 0; flex-shrink: 0; flex-basis: 50%;
            
          }
          
        `}
    </style>
</>
    
  )

}

export default IndexPage


export const query = graphql`
  query {
    info:allJson(filter: {type: {eq: "System"}}, sort: {order: ASC, fields: releaseDate}) {
      totalCount
      nodes {
        type
        name
        rate
        releaseDate
        generation
        developer
        systemImage {
        childImageSharp {
          gatsbyImageData(
            formats: [JPG, WEBP]
            height: 500
            aspectRatio: 1.5
            quality: 6
            
          )
        }
      }
        fields {
        slug
      }
      }
    },
    count:allMarkdownRemark(filter: {frontmatter: {type: {eq: "Game"}}}) {
    group(field: fields___system) {
      totalCount
      fieldValue
    }
  }
  }
`


export const Head: HeadFC = ({ data }: HeadProps) => 
 {
  return <MetaHead title={`00Games`} description={`VideoGames Database`} />;
 }
