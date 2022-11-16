import { GatsbyNode } from "gatsby";
import { getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { createFilePath } from "gatsby-source-filesystem";
import { off } from "process";
import * as slugLib from "slug";






export const onCreateNode : GatsbyNode['onCreateNode'] = async({actions,getNode,node})=>{
    // actions:
//     deletePage: [Function (anonymous)],
//   createPage: [Function (anonymous)],
//   deleteNode: [Function (anonymous)],
//   createNode: [Function (anonymous)],
//   touchNode: [Function (anonymous)],
//   createNodeField: [Function (anonymous)],
//   createParentChildLink: [Function (anonymous)],
//   setWebpackConfig: [Function (anonymous)],
//   replaceWebpackConfig: [Function (anonymous)],
//   setBabelOptions: [Function (anonymous)],
//   setBabelPlugin: [Function (anonymous)],
//   setBabelPreset: [Function (anonymous)],
//   createJob: [Function (anonymous)],
//   createJobV2: [Function (anonymous)],
//   addGatsbyImageSourceUrl: [Function (anonymous)],
//   setJob: [Function (anonymous)],
//   endJob: [Function (anonymous)],
//   setPluginStatus: [Function (anonymous)],
//   createRedirect: [Function (anonymous)],
//   createPageDependency: [Function (anonymous)],
//   createServerVisitedPage: [Function (anonymous)],
//   unstable_createNodeManifest: [Function (anonymous)],
//   setRequestHeaders: [Function (anonymous)],
//   createFieldExtension: [Function (anonymous)],
//   createTypes: [Function (anonymous)],
//   createResolverContext: [Function (anonymous)],
//   addThirdPartySchema: [Function (anonymous)],
//   printTypeDefinitions: [Function (anonymous)]
    // node.internal.types:
    // SitePage
    // Directory
    // type do json é File
    // mediaType: 'application/json'
    // se nao puxar o internal e puxar um name, ele da o nome da pasta


    //internal types:
    // Directory
    const {createNodeField} = actions;


    type systemParams={
        name:string;
        slug: string;
        releaseDate:number;
        developer:string;
        generation:number;
        rate:number;
        };

        // types dos arquivos
        // SystemXml
        // MarkdownRemark
        // YAML
        // Json

if(node.internal.type === `Json`  && node.type === `System`){
 
        let slug = `${(node.developer as string).toLowerCase()}-${(node.name as string).toLowerCase()}`
      
        slug = slugLib(slug);



        const fullPath = createFilePath({
            getNode,
            node,
            trailingSlash:false
        });
    
        const path = fullPath.split(`/`);
    
        // createNodeField({
        //     node,
        //     name: 'Image',
        //     value: image,
        // });
        
        createNodeField({
            node,
            name: 'slug',
            value: slug,
        });
    
    


}


if(node.internal.type === `MarkdownRemark` && (node.frontmatter as any).type === `Game`){

    const fullPath = createFilePath({
        getNode,
        node,
        trailingSlash:false
    });

    
    const path = fullPath.split(`/`);

    const fileName = path[path.length-1];
    const gameName = (node.frontmatter as any).name.toLowerCase()
    const system = path[path.length-3]

    const slug = slugLib(`${system}-${gameName}`)
 
    
    createNodeField({
        node,
        name: 'slug',
        value: slug,
    });
    createNodeField({
        node,
        name: 'system',
        value: system,
    });


    createNodeField({
        node,
        name: 'Image',
        value: `${fullPath}.jpg`,
    });



}


if(node.internal.type === `MarkdownRemark` && (node.frontmatter as any).type === `System`){
                
    const fullPath = createFilePath({
        getNode,
        node,
        trailingSlash:false
    });
    const path = fullPath.split(`/`);

    const {name ,developer}:{name:string,developer:string} = node.frontmatter as any

    const slug = slugLib(`${developer}-${name}`)
 
    
    createNodeField({
        node,
        name: 'slug',
        value: slug,
    });
    createNodeField({
        node,
        name: 'system',
        value: slug,
    });
    // createNodeField({
    //     node,
    //     name: 'Image',
    //     value: `${fullPath}.jpg`,
    // });




}

}


// nao tem como editar uma pagina, preciso pega-la deleta-la e recria-la e colocar as variaveis que desejo
// no context
export const onCreatePage : GatsbyNode['onCreatePage'] = async({ page, actions })=>{
    const {createPage,deletePage} = actions

    const pageContext = (page as any ).context
    if(pageContext.fields__slug){
     const system = (pageContext.fields__slug as string);
     
    deletePage(page)
    

    createPage({
        ...page,
        context: {
          ...page.context,
          system,
        },
      })
    // como eu nao meti a slug, e sim um 
}
}