import React from 'react'
import {HiUser,HiUserGroup} from 'react-icons/hi'

const Third=() => {
  return (
    <>
     <div className=' App app'>
       <h1>
           <b>How are you planning to use Eden?</b>
       </h1>
       <h5 className='first-para'>We'll streamline your setup expy.erience accordingl</h5>
       <div className='d-flex justify-content-center mt-5'>
           <div className='box-12 hl'>
           < HiUser size={30} className="mb-3 hl"/>

               <p className='text-12'>For Myself</p>
               <p>
                   Write better.Think<br/> more clearly. Stay<br/> organized.
               </p>
           </div>
           <div className='box-12 hl'>
           < HiUserGroup size={30} className="mb-3 hl"/>

           <p className='text-12'>With my team</p>
               <p>
                   Wikis, docs, tasks &<br/> projects, all in one<br/> place.
               </p>
           </div>
       </div>
      <button type="button" className="btn workspace mt-4">Create Workspace</button>
    </div>
    </>
  )
}

export default Third