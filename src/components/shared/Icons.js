import React from 'react'
import Image from 'next/image'
// import img from '../../imag/icon1.png'
import './shared.css'
export default function Icons({img}) {
    return (
        <div>
            <div className='icons' >
                <div className='iconsImage' >
                  <Image src={img} alt="icon"   priority />
                </div>

            </div>

        </div>
    )
}
