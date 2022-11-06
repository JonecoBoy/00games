import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../layout/Layout"
import Card from "../components/card"
import { cardParams } from "../components/card"


const teste = {
  name:"Skies of Arcadia",
  img:'https://www.gamecash.fr/thumbnail-400-450/skies-of-arcadia-legends-us-e70705.jpg',
  slug:'game',
  releasedDate:2001,
  publisher:"Nintendo",
  generation:6,
  rate:3,
}

const IndexPage = () => {
  return (
    <>
    <Layout>
      <h1>Games</h1>
      <div className="cards">
        <Card cardParams={teste}></Card>
        <Card cardParams={teste}></Card>
        <Card cardParams={teste}></Card>
        <Card cardParams={teste}></Card>
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

export const Head: HeadFC = () => <title>00Games</title>
