import Wrapper from '@/components/shareable/Wrapper';
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import React from 'react'
interface Item{
  id:number,
  src:string
}

 async function Essan() {
    const EssanData=await client.fetch(`*[_type == "Essan"]{
       
        id,
          src
         
     }`)
     console.log(EssanData);
     
  return (
    <Wrapper>
    <div>
    <div className=' mt-8'>
        <h3 className='text-xl font-bold'>The Essentials</h3>
      </div>

    
    <div className='flex justify-center gap-4 mt-28 flex-col sm:flex-row'>
        {
          EssanData.map((item:Item) => {
            return (
              <div key={item.id} className='text-center'>
                <Image src={urlFor(item.src).url()} alt='' height={441} width={441} className='mx-auto' />
              </div>
            )
          })
        }
      </div>
    
    
    
    
    
    
    
    
    </div>
</Wrapper>
  )
}

export default Essan