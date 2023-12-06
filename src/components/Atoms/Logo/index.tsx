import Image from 'next/image'
import React from 'react'
import logo from '~/assests/Logo.png'

const Logo = ({height,width}:{height?:number,width?:number}) => {
  return (
    <Image src={logo} alt='Logo' width={width} height={height}></Image>
  )
}

export default Logo