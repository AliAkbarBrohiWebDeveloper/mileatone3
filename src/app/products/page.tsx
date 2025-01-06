import Button2 from '@/components/shareable/Button'
import Wrapper from '@/components/shareable/Wrapper'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import React from 'react'



interface IProducts{
    id:number,
    header1:string,
     header2 :string,
     shoes:string,
     color:string,
     price:string,
     src:string,
     
}



 async function Products() {

const proresult=await client.fetch(`  *[_type == "productsSection"]{
       
        id,
         header1,
          header2,
          shoes,
          color,
          price,
          src,
          
         
     }
    
    `)

    console.log(proresult);
    

  return (
   <div> 
<Wrapper>
      <section className="py-8">
        <main className="flex flex-col md:flex-row gap-8 md:gap-16">
          
          
          <div className="w-full md:w-1/4">
            <h3 className="font-bold text-lg">New (500)</h3>
            <ul className="space-y-2 mt-4">
              <li>Sports Bras</li>
              <li>Tops & T-Shirts</li>
              <li>Hoodies & Sweatshirts</li>
              <li>Jackets</li>
              <li>Shorts</li>
              <li>Trousers & Tights</li>
              <li>Tracksuits</li>
              <li>Jumpsuits & Rompers</li>
              <li>Skirts & Dresses</li>
              <li>Socks</li>
              <li>Accessories & Equipment</li>
            </ul>
            
          
            <div className='mt-16'>
                <h5 className='text-xl font-bold'>Gender</h5>
<input type="checkbox"   className='mt-3'/> Male
<br />
<input type="checkbox"  className='mt-3' /> Women
<br />
<input type="checkbox"  className='mt-3' />Unisex 

            </div>


            <div className='mt-5'>
                <h5 className='text-xl font-bold'>Kids</h5>
<input type="checkbox"   className='mt-3'/> Boys
<br />
<input type="checkbox"  className='mt-3' /> Girls


            </div>



            <div className='mt-5'>
                <h5 className='text-xl font-bold'>Shop By Price</h5>
<input type="checkbox"   className='mt-3'/>Under ₹ 2 500.00
<br />
<input type="checkbox"  className='mt-3' />₹ 2 501.00 - ₹ 7 500.0

            </div>
            
            </div>
          
           <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {
                proresult.map((item:IProducts) => (
                  <div key={item.id} className="flex flex-col items-center text-center border p-4 rounded-lg hover:shadow-md transition duration-300">
                   \ <Image src={urlFor(item.src).url()} alt={item.header1} height={348} width={348} className="mb-4" />
                    <span className=" text-[#9E3500] font-semibold text-xl">{item.header1}</span>
                    <h5 className="font-semibold text-lg mt-2">{item.header2}</h5>
                    <p className="text-sm text-gray-700">{item.shoes}</p>
                    <p className="text-sm text-gray-500">{item.color}</p>
                    <span className="font-bold mt-2">{item.price}</span>
                 
                  </div> 
                 ))
              } 
             </div>
          </div> 
        </main>
<div>

<h4 className='text-xl font-bold'>Related Categories</h4>
</div>
 <div className='flex flex-col md:flex-row items-center '>
<Button2 text='Best Selling Products'/>
<Button2 text='Best Shoes'/>
<Button2 text='New Basketball Shoes'/>
<Button2 text='New Football Shoes'/>
<Button2 text='New Mens Shoes'/>
<Button2 text='New Running Shoes'/>
<Button2 text='Best Mens Shoes'/>



</div>
<div className='flex gap-x-3 flex-col md:flex-row'>

<Button2 text='New Jordan Shoes'/>
<Button2 text='Best Womens Shoes'/>
<Button2 text='Best Training & Gym'/>

</div> 




      </section>
      </Wrapper>



   </div>
  )
}

export default Products


































