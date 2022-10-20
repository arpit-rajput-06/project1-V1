import React from 'react'

const First = () => {
  return (<>
    <div className=' App app'>
       <h1>
           <b>Welcome! First things first...</b>
       </h1>
       <h5 className='first-para'>You can always change them later</h5>
       <form>
           <p className='Full-name mt-5'>Full Name</p>
           <input type='text' placeholder='Steve Jobs' className='text-form'/>
           <p className='Display-name mt-3'>Display Name</p>
           <input type='text' placeholder='Steve' className='text-form'/>
       </form>
      <button type="button" className="btn workspace mt-4">Create Workspace</button>
    </div>
    </>
  )
}

export default First