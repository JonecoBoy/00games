import * as React from "react"
import { graphql, HeadFC, HeadProps, PageProps } from "gatsby"
import Layout from "../layout/Layout"
import Card from "../components/card"
import { cardParams } from "../components/card"
import { MetaHead } from "../components/MetaHead"



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
  const systems = data.allJson.nodes;

  return (
    <>
    <Layout>
      <h1>Sistemas</h1>
      <div className="cards">
        {systems.map((item:any)=>{
          let system:cardParams = item
          system = {...item,...item.fields}
          return <Card cardParams={system}></Card>
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
    allJson(filter: {type: {eq: "System"}}) {
      nodes {
        type
        name
        rate
        releaseDate
        img
        fields {
        slug
      }
      }
    }
  }
`


export const Head: HeadFC = ({ data }: HeadProps) => 
 {
  return <MetaHead title={`00Games`} description={`VideoGames Database`} />;
 }
