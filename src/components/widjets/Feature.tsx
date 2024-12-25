
import React from 'react'
import Wrapper from '../shareable/Wrapper';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';




const Feature = async() => {

const result=await client.fetch(` *[_type == "featureSection"][0]{
     image,
  heading,
  paragraph,
  buttonText
        
         
         
     }
    `)
    console.log(result);
    

  return (
    <Wrapper>
    <section className='mt-5'>
      <div className='font-bold'>
        Featured
      </div>

      <main className='h-[700px] w-[100%] mt-16'>
<Image src={urlFor(result.image).url()} alt=''/>

      </main>
      <div className='text-center mt-3'>
        <h3 className='text-2xl font-bold'>{result.heading}</h3>
        <p>{result.paragraph}.</p>
        <button className='px-6 py-2 bg-black text-white rounded-lg mt-3'>{result.buttonText}</button>
      </div>
    </section>
    </Wrapper>
  );
}

export default Feature;
