import { HeadFC } from 'gatsby';
import * as React from 'react'
import { useForm } from "react-hook-form";
import Layout from '../layout/Layout';

const contact = ()=>{
    const sleep = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms));
    const url = 'https://webhook.site/d306dab9-4c55-47db-9d2e-421dc67c355f';
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
      const onSubmit = async (data:any) => {
       
        //trocar para axios, ver se tem resposta
        // poderia por o stringfy do data ou o state register
            console.log(data);
            await fetch(
                url,
                {
                    method:'POST',
                    body:JSON.stringify(data),
                    mode:"no-cors",
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    }
    
                }
            ).then((response)=>{
                console.log(response);
                // quer dizer que foi
            }).catch((e)=>{
                console.log(e)
            })
            ;
                

      };

     

// criar validacao e por os spans em vermelho e se pá o outline tambem nos campos

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
