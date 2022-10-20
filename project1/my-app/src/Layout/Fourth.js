import React from 'react'
import {BsFillCheckCircleFill} from 'react-icons/bs';

const Fourth=()=> {
  return (
    <>
     <div className=' App app'>
     <BsFillCheckCircleFill size={70} className="ricon mb-5"/>
       <h1>
           <b>Congratulations, Eren!</b>
       </h1>
       <h5 className='first-para'>You have completed onboarding, you can start using the Eden!</h5>
      <button type="button" className="btn workspace mt-4">Launch Eden</button>
    </div>
    </>
  )
}

export default Fourth