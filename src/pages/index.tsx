import * as React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import Layout from "../layout/Layout"
import Card from "../components/card"
import { cardParams } from "../components/card"



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


export const Head: HeadFC = () => <title>00Games</title>
