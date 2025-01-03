import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

import React from 'react';
import Wrapper from '../shareable/Wrapper';
import Image from 'next/image';
import Button from '../shareable/Button2';




const  Hero = async () => {


    const res=await client.fetch(`
  *[_type == "heroSection"][0]{
    image,
        heading,
        heading1,
        paragraph,
      buttonText,
          button1Text
         
         
     }`)
       console.log(res);
       


  return (
    <Wrapper>
   
    <section className='mt-10'>

      <div className='text-center'>

        <h2 className='font-bold'>Hello Nike App</h2>
        <p className='text-sm'>Download the app to access everything Nike. Get Your Great</p>
      </div>
      <main className="relative md:h-[700px] h-[300px] w-auto ">

        <Image src={urlFor(res.image).url()} alt='hero-section' height={500} width={500} className='relative md:h-[700px] h-[300px] md:w-full w-auto'/>

       
      </main>

      <div className='text-center mt-28'>

<h4>{res.heading}</h4>
<h3 className='text-5xl font-semibold'>{res.heading1}</h3>
<p className='mt-4'>{res.paragraph}.</p>
<div className='flex justify-center items-center gap-x-9 mt-3'>
<Button text={res.buttonText}/>
<Button text={res.button1Text}/>
</div>



      </div>

      
      
    </section>
    </Wrapper>
   
  );
}

export default Hero;











