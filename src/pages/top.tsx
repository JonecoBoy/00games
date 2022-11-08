import { HeadFC } from 'gatsby';
import * as React from 'react'
import Layout from '../layout/Layout';

const contact = ()=>{
     
  return (
    <Layout>
        <div className='background-form'>
        About
    </div>
    </Layout>
  );
}
export default contact
export const Head: HeadFC = () => <title>00Games - Contact Us</title>
