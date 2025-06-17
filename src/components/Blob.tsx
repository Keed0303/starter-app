import React from 'react'
import './Blob.css'
interface Props {
  children: React.ReactNode
}

const BlobComponent = ({ children }: Props) => {
  return (
    <>
      <div className="blob1">
        <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--ion-color-primary)" d="M42.9,-54C50.5,-53.4,48.4,-34.2,42.2,-21.2C36.1,-8.3,25.9,-1.6,25,10.2C24,22,32.3,38.9,29.6,47.3C27,55.8,13.5,55.8,3.3,51.3C-6.9,46.7,-13.8,37.6,-24.3,31.7C-34.8,25.8,-48.9,23.1,-54.9,15.3C-60.9,7.5,-58.9,-5.5,-53,-15.2C-47.1,-25,-37.3,-31.5,-27.9,-31.5C-18.4,-31.6,-9.2,-25.2,4.2,-31C17.6,-36.7,35.2,-54.7,42.9,-54Z" transform="translate(100 100)" />
        </svg>
      </div>
      {children}
      <div className="blob2">
        <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--ion-color-primary)" d="M40.5,-55.2C45.1,-44.4,36.4,-24.6,36,-9C35.7,6.7,43.6,18.2,42.8,29.5C42,40.8,32.5,51.9,22.3,51.3C12.1,50.8,1.2,38.6,-13.8,34.6C-28.9,30.6,-48.1,34.8,-57.6,28.4C-67,22,-66.7,5.2,-59.4,-6C-52.2,-17.2,-38,-22.8,-26.9,-32.5C-15.8,-42.2,-7.9,-56.1,5,-62.1C17.9,-68.1,35.9,-66.1,40.5,-55.2Z" transform="translate(100 100)" />
        </svg>
      </div>
    </>

  )
}

export default BlobComponent