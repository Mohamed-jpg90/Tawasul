import React from 'react'
import Image from 'next/image'
import Button from './Button'
import  './shared.css'
export default function ExplinationDiv({
    text ,
    discription,
    buttom1,
    buttom2
}) {
  return (
    <div className='explinationDiv' >
      <div className='explinationDivContent' >
          <div className='divText' >
            <h2 style={{marginBottom:"10px"}} >{text}</h2>
            <p> {discription} </p>
          </div>
          <div className='divButtom' >
             {
                buttom1?(<Button text={buttom1} to='regiter' primary={true}  />):(<></>)
             }
                     {
                buttom2?(<Button text={buttom2} to='regiter' primary={false}  />):(<></>)
             }
            

          </div>
      </div>
    </div>
  )
}
