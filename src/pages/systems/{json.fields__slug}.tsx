import * as React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import Layout from "../../layout/Layout"
import Card from "../../components/card"
import { cardParams } from "../../components/card"




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

// retirar dos sub parametros
const systemInfo = {...(data as any).systemInfo.frontmatter, ...(data as any).systemInfo.fields}
systemInfo.html = (data as any).systemInfo.html;

  return (
    <>
    <Layout>
    <div className="system-info">
    <img className="system-image" src={systemInfo.img}></img>
    <div className="system-data">
    <div className="infoBox">
                    <span className="title">Publisher: </span>
                    <span>{systemInfo.developer}</span>
            </div>
            <div className="infoBox">
                <span className="title">Release Date: </span>
                <span>{systemInfo.releaseDate}</span>
            </div>
            <div className="infoBox">
                <span className="title">Generation: </span>
                <span>{systemInfo.generation}</span>
            </div>
            <div className="infoBox">
                <span className="title">Rate: </span>
                <span>{systemInfo.rate}</span>
            </div>
    </div>
    </div>
      <div className="system-review" dangerouslySetInnerHTML={{__html:systemInfo.html}}></div>

<hr></hr>

      <div className="cards">
        
        {
         !games || games.length<1 
         ?
         <div className="dangerAlert"> No Games in Database</div>
         :
         games.map((item)=>{
          const game = {...item.frontmatter,...item.fields}
          return(
                  <Card cardParams={game}/>
                )
        })
              
        }
        
      </div>
      </Layout>
    <style jsx>
        {`
          .cards{
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            flex-wrap:wrap;
            margin-top:20px;
            
          }
          .dangerAlert{
            display:flex;
            width:90%;
            background-color: #cc4726d6;
            color:white;
            min-height: 60px;
            border-radius: 10px;
            text-align:center;
            vertical-align: middle;
            margin:auto;
            align-items:center;
          justify-content:center;
          margin-bottom: 20px;
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
              display:flex;
           
              min-height:200px;
              max-height:500px;
              min-height:200px;
              max-height:500px
          }
          .system-data{
              flex:1;
              display:flex;
              justify-content:space-evenly;
              text-align:left;
              flex-direction:column;
          }

          .info-box span{
            padding-top:200px;
          }
          hr{
            border: 1px solid  rgba(40, 40, 50, 1);
          }

          h3{
            color: rgba(255, 255, 255, 1);
            text-transform: uppercase;
            background-color: rgba(81, 98, 213, 1);
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
          span.title{
            font-size:2.05rem;
          }
          span:not(.title){
            font-size:1.4rem;
          }
          
        `}
    </style>
</>
    
  )

}

export default IndexPage

export const Head: HeadFC = () => <title>00Games</title>


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

