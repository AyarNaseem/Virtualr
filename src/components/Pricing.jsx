import React from 'react'
import { pricingOptions } from '../constants'
import { CheckCircle2 } from 'lucide-react'
import Feature from './Feature';
const Pricing = () => {
  return (
    <div className='mt-20'>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">Pricing</h2>
        <div className="boxs flex flex-wrap ">
               { pricingOptions.map((opt,ind)=>(
            <div key={ind} className="box p-2 w-full lg:w-1/3 sm:w-1/2">
                <div className="p-10 border border-neutral-700 rounded-xl">

                <p className='text-4xl mb-8'>{opt.title}
                    {" "} {opt.title==="Pro" && <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-xl mb-4 ml-2 text-transparent bg-clip-text'>(Most popular)</span>}
                </p>
                <p className='mb-10'>
                    <span className='text-5xl mt-6 mr-2'>{opt.price}</span>
                    <span className='text-neutral-400 tracking-tight'>/Month</span>
                    </p>
                {/* <p>{opt.features}</p> */}
                <ul>
                    {opt.features.map((feature,index)=>(
                        <li key={index} className='mt-2 flex items-center '>
                        <CheckCircle2/>
                        <span className='ml-2'>{feature}</span>
                        </li>
                    ))}
                </ul>
                <a href="#" className='inline-flex items-center justify-center text-center w-full h-12 p-5 mt-20 text-xl tracking-tight border border-orange-900 rounded-lg hover:bg-orange-900 transition duration-200'>Subscribe</a>
                </div>
            </div>
               ))}
        </div>

    </div>
  )
}

export default Pricing
