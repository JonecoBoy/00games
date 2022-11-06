import * as React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../layout/Layout"
import Card from "../components/card"
import { cardParams } from "../components/card"


const teste = {
  name:"GameCube",
  img:'https://m.media-amazon.com/images/I/41wEYtpZb3L._AC_SY1000_.jpg',
  slug:'system',
  releasedDate:2001,
  publisher:"Nintendo",
  generation:6,
  rate:3,
  }

const IndexPage = () => {
  return (
    <>
    <Layout>
      <h1>Sistemas</h1>
      <div className="cards">
        <Card cardParams={teste}></Card>
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
