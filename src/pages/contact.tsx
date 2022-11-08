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
    <form  onSubmit={async (data) => {
      await handleSubmit(onSubmit)(data)
    }}>
      <h1>Async Submit Validation</h1>
      <label htmlFor="username">First Name</label>
      <input placeholder="Jonas" {...register("username")} />

      <label htmlFor="lastName">Last Name</label>
      <input placeholder="Nunes" {...register("lastName")} />

      <label htmlFor="email">Email</label>
      <input
        placeholder="joneco@joneco.com.br"
        type="text"
        {...register("email")}
      />

      <div style={{ color: "red" }}>
        {Object.keys(errors).length > 0 &&
          "There are errors, check your console."}
      </div>
      <input type="submit"/>
    </form>
    <style jsx>
        {`
                    body {
            background: #0e101c;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
                "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
                sans-serif;
            }

                    form {
                    max-width: 500px;
                    margin: 0 auto;
                    }

                    h1 {
                    font-weight: 100;
                    color: white;
                    text-align: center;
                    padding-bottom: 10px;
                    border-bottom: 1px solid rgb(79, 98, 148);
                    }

                    .form {
                    background: #0e101c;
                    max-width: 400px;
                    margin: 0 auto;
                    }

                    p {
                    color: #bf1650;
                    }

                    p::before {
                    display: inline;
                    content: "⚠ ";
                    }

                    input {
                    display: block;
                    box-sizing: border-box;
                    width: 100%;
                    border-radius: 4px;´
                    border: 1px solid white;
                    padding: 10px 15px;
                    margin-bottom: 10px;
                    font-size: 14px;
                    }

                    label {
                    line-height: 2;
                    text-align: left;
                    display: block;
                    margin-bottom: 13px;
                    margin-top: 20px;
                    color: white;
                    font-size: 14px;
                    font-weight: 200;
                    }

                    button[type="submit"],
                    input[type="submit"] {
                    background: #ec5990;
                    color: white;
                    text-transform: uppercase;
                    border: none;
                    margin-top: 40px;
                    padding: 20px;
                    font-size: 16px;
                    font-weight: 100;
                    letter-spacing: 10px;
                    }

                    button[type="submit"]:hover,
                    input[type="submit"]:hover {
                    background: #bf1650;
                    }

                    button[type="submit"]:active,
                    input[type="button"]:active,
                    input[type="submit"]:active {
                    transition: 0.3s all;
                    transform: translateY(3px);
                    border: 1px solid transparent;
                    opacity: 0.8;
                    }

                    input:disabled {
                    opacity: 0.4;
                    }

                    input[type="button"]:hover {
                    transition: 0.3s all;
                    }

                    button[type="submit"],
                    input[type="button"],
                    input[type="submit"] {
                    -webkit-appearance: none;
                    }

                    .App {
                    max-width: 600px;
                    margin: 0 auto;
                    }

                    button[type="button"] {
                    display: block;
                    appearance: none;
                    background: #333;
                    color: white;
                    border: none;
                    text-transform: uppercase;
                    padding: 10px 20px;
                    border-radius: 4px;
                    }

                    pre {
                    color: white;
                    }

                    hr {
                    margin-top: 30px;
                    }

                    button {
                    display: block;
                    appearance: none;
                    margin-top: 40px;
                    border: 1px solid #333;
                    margin-bottom: 20px;
                    text-transform: uppercase;
                    padding: 10px 20px;
                    border-radius: 4px;
                    
                    }
                    .background-form{
                        background-color: rgba(81, 98, 213, 1);
                        padding-bottom:20px;
                        max-width:50%;
                        display:flex;
                        justify-content:center;
                        justify-items:center;
                    }
        `}
    </style>
    </div>
    </Layout>
  );
}
export default contact
export const Head: HeadFC = () => <title>00Games - Contact Us</title>
