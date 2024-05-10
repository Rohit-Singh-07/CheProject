
import Suyash from '../assets/Suyash.jpg'
import Rohitpic from '../assets/Rohitpic.jpg'
import detailbg from "../assets/detailbg.mp4";
import Shruti from '../assets/Shruti.jpeg'

const AboutUs = () => {
  return (
    <div className='realtive'>
      <video className='absolute h-[100vh] w-[100vw] top-0 object-cover' src={detailbg} autoPlay muted loop></video>
      <div className='z-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] w-[70vw] mt-[14vh] mx-[15vw] flex flex-col gap-[5vw] text-[2vw] text-white bg-slate-50 bg-opacity-10 py-[2vh] rounded-md absolute'>
      <div className='flex justify-between px-[3vw]'>
        <img className='h-[10vw] w-[10vw] object-cover rounded-full' src={Shruti} alt="" />
        <div className='flex justify-center items-start flex-col w-[20vw]'>
        <h1>Name: Shruti Oran</h1>
        <h1>Reg no. : 12323468</h1> 
        <h1>Role: Design & Work Plan</h1>
        </div>
      </div>
      <div className='flex justify-between px-[3vw]'>
      <img className='h-[10vw] w-[10vw] object-cover rounded-full' src={Rohitpic} alt="" />
        <div className='flex justify-center items-start flex-col w-[20vw]'>
        <h1>Name: Rohit Singh</h1>
        <h1>Reg no. : 12315321</h1> 
        <h1>Role: Developer</h1>
        </div>
      </div>
      <div className='flex justify-between px-[3vw]'>
      <img className='h-[10vw] w-[10vw] object-cover rounded-full' src={Suyash} alt="" />
        <div className='flex justify-center items-start flex-col w-[20vw]'>
        <h1>Name: Suyash Pundir</h1>
        <h1>Reg no. : 12317385</h1> 
        <h1>Role: Reserach Work</h1>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AboutUs
