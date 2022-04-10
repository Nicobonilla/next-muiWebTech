import React from 'react';
import Image from 'next/image'


function LogoImage() {
  return (
    <>
      <Image
        /* falta el loader */
        src="/logo.jpg"
        alt="Picture of the author"
        width={150}
        height={90}
      />
    </>
  );
}

export default LogoImage;
