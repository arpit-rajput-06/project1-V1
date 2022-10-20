import React from 'react'

const Second = () => {
  return (
    <>
     <div className=' App app'>
       <h1>
           <b>Let's set up a home for all your work</b>
       </h1>
       <h5 className='first-para'>You can always change them later</h5>
       <form>
           <p className='workspace-name mt-5'>Workspace Name</p>
           <input type='text' placeholder='Steve Jobs' className='text-form'/>
           <p className='url-name mt-3'>Workspace URL</p>
           {/* <input type='text' placeholder='Steve' className='text-form'/> */}
           <button type="Submit" className='submit'>www.eden.com/</button>
           <input
       type="url"
       value=""
       placeholder="Example" 
       className='typ'        
        />
       </form>
      <button type="button" className="btn workspace mt-4">Create Workspace</button>
    </div>
    </>
  )
}

export default Second