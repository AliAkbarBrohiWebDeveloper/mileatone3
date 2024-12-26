import Wrapper from '@/components/shareable/Wrapper';
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import React from 'react'


interface Iitem{
  id:number,
  header:string,
  para:string,
  src:string
}

 async function Airpage() {
    const AirMax=await client.fetch(`*[_type == "airMax"]{
       
        id,
         header,
          para,
          src
         
     }`)
     console.log(AirMax);
     
  return (
    <Wrapper>
    <div>
    <div>
        <p>Best of Air Max</p>
    </div>
    
    
    <div className='flex justify-center gap-4 mt-28 flex-col sm:flex-row'>
        {
          AirMax.map((item:Iitem) => {
            return (
              <div key={item.id} className='text-center'>
                <Image src={urlFor(item.src).url()} alt='' height={441} width={441} className='mx-auto' />
                <h3 className='mt-4 text-lg font-semibold'>{item.header}</h3>
                <p>{item.para}</p>
              </div>
            )
          })
        }
      </div>
    
    
    
    
    
    
    
    
    
    </div>
</Wrapper>
  )
}

export default Airpage