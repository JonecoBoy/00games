import { HeadFC, HeadProps } from 'gatsby';
import * as React from 'react'
import { MetaHead } from '../components/MetaHead';
import Layout from '../layout/Layout';

const contact = ()=>{
     
  return (
    <Layout>
        <div className='background-form'>
        TODO, pagina sobre com foto e infos do site
    </div>
    </Layout>
  );
}
export default contact
export const Head: HeadFC = ({ data }: HeadProps) => 
 {
  return <MetaHead title={`00Games - About`} description={`VideoGames Database about page`} />;
 }

