import { HeadFC, HeadProps } from 'gatsby';
import * as React from 'react'
import { MetaHead } from '../components/MetaHead';
import Layout from '../layout/Layout';

const contact = ()=>{
     
  return (
    <Layout>
        <div className='background-form'>
        About;
    </div>
    </Layout>
  );
}
export default contact
export const Head: HeadFC = ({ data }: HeadProps) => 
 {
  const { name , developer} = (data as any).system;
  return <MetaHead title={`00Games - About`} description={`VideoGames Database about page`} />;
 }

