import React from 'react'
import Lottie from 'lottie-react'
import ElecLoading from '../assets/ElecLoading.json'

function LoadingAni() {
  return (
    <div className='h-screen w-full flex justify-center items-center flex-col'>
        <Lottie className='h-80' animationData={ElecLoading}/>
        <h1 className='font-bold font-serif italic'>Loadind...</h1>
    </div>
  )
}

export default LoadingAni