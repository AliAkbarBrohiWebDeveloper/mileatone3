import Link from 'next/link'
import React from 'react'

import Image from 'next/image'


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { BiSearch } from 'react-icons/bi'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Wrapper from '../shareable/Wrapper'




const Headertop =  async () => {





    const res=await client.fetch(`
  
        *[_type == "navbar"]{
       
        logo,
        FindStore,
        Help,
        Join,
        Sign
         
         
     }[0]
       
       
       `)
       console.log(res);
       





  return (
    <Wrapper>

    <header className='flex justify-between items-center gap-x-9  md:bg-[#F5F5F5]'>

      <div>

<img src={urlFor(res.logo).url()} alt='' height={50} width={50}/>

      </div>

<div className='  gap-x-10 hidden md:flex font-bold md:ml-[700px]' >

<Link href={'/'}></Link>



    <Link href={'products'}>{res.FindStore}</Link>




  <Link href={'help'}>{res.Help}</Link>


  <Link href={'/join'}>{res.Join}</Link>


    <Link href={'/sign'}>{res.Sign}</Link>

  
</div>

<div className="relative w-64  md:hidden sm:block"> 
          <input 
            type="text" 
             
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
          <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl " />
        </div>


<div>


<Sheet>
  <SheetTrigger className='md:hidden'><Menu/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
      <div className='flex flex-col gap-y-6 text-xl font-bold' >

<Link href={'/'}></Link>


<Link href={'/'}>New & Featured</Link>
    <Link href={'products'}>{res.FindStore}</Link>




  <Link href={'help'}>{res.Help}</Link>


  <Link href={'/join'}>{res.Join}</Link>


    <Link href={'/sign'}>{res.Sign}</Link>
              <Link href={'men'}>Men</Link>
            
            
              <Link href={''}>Women</Link>
          
            
              <Link href={''}>Kids</Link>
        
        
              <Link href={''}>Sales</Link>
            
              <Link href={''}>SNKRS</Link>
            



</div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>



</div>


    </header>
    </Wrapper>
    
  )
}

export default Headertop