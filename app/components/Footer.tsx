import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-sub-color py-[50px] text-white">
    <div className="mb-12">
      <Link href="/">
        <Image 
          src="/images/icon.png"
          alt=""
          width={100}
          height={100}
        />
      </Link>
    </div>
    <p className="mb-12">
          <span className="mr-2"><small>CREATED&nbsp;BY&nbsp;</small></span>
          <span className="font-bold">阿川&nbsp;俊生&nbsp;(AgawaToshiki) </span>
      </p>
    <p><small>&copy;&nbsp;2023&nbsp;It&apos;s Me</small></p>
  </div>
  )
}

export default Footer