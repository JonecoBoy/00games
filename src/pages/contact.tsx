import { HeadFC, HeadProps } from 'gatsby';
import * as React from 'react'
import { useForm } from "react-hook-form";
import Form from '../components/form';
import { MetaHead } from '../components/MetaHead';
import Layout from '../layout/Layout';

const contact = ()=>{

  return (
    <Layout>
        <div className='background-form'>
    <Form title={`Submit a message`}/>
    <style jsx>
    {`

.background-form{
  background-color: rgba(81, 98, 213, 1);
  padding:15px;
  max-width:60%;
  display:flex;
  justify-content:center;
  justify-items:center;
  border-radius: 8px;
  margin:auto;
}
    `}
    </style>
    </div>
    </Layout>
  );
}
export default contact
export const Head: HeadFC = ({ data }: HeadProps) => 
 {

  return <MetaHead title={`00Games - Contact Us`} description={`VideoGames Database contact page`} />;
 }