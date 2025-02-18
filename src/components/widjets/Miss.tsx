
import React from 'react'
import Wrapper from '../shareable/Wrapper';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Button from '../shareable/Button2';




const MissSection = async() => {

const result=await client.fetch(` *[_type == "missSection"][0]{
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
        Donot Miss
      </div>

      <main className='h-[700px] w-[100%] mt-16'>
<Image src={urlFor(result.image).url()} alt='' height={500} width={500} className='h-[700px] w-[100%]'/>

      </main>
      <div className='text-center mt-3'>
        <h3 className='text-2xl font-bold'>{result.heading}</h3>
        <p>{result.paragraph}.</p>
       <Button text={result.buttonText}/>
      </div>
    </section>
    </Wrapper>
  );
}
export default MissSection;
