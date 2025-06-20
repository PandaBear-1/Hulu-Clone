import { useState} from 'react'
import { IoSearch, IoChevronDown, IoChevronUp} from "react-icons/io5";
import logo from '../assets/logo.png'

function Header() {
    const [toggle, setToggle] = useState(false)
    const menu=[
        {
            id:1,
            name:'Home'
        },
        {
            id:2,
            name:'Movies'
        },
        {
            id:3,
            name:'TV'
        },
        {
            id:4,
            name:'Sports'
        },
        {
            id:5,
            name:'News'
        },
        {
            id:6,
            name:'Hubs'
        },
    ]


  return (
    <div className='flex justify-between items-center p-4 px-10 absolute w-full 
    bg-gradient-to-b from-[#1e2126] to-transparent '>
        <img className='w-[65px]' src={logo} />
        <ul className='hidden md:flex gap-8 '>
        {    menu.map((item) => (
            <li className='text-gray-400 text-[18px] font-medium cursor-pointer
            hover:bg-gray-700 hover:text-white px-3 pb-2 py-1 rounded-md transition-all 
            duration-500 ease-in-out'>{item.name}</li>
        ))}
        </ul>

        <div className='md:hidden'>
            <h2 onClick={()=> setToggle(!toggle)}  className='text-gray-400 text-[18px] font-medium cursor-pointer 
                flex items-center gap-2
                hover:bg-gray-700 hover:text-white px-3 pb-2 py-1 rounded-md transition-all 
                duration-500 ease-in-out'>
                Home
                { toggle ? <IoChevronUp className='mt-1' /> : <IoChevronDown className='mt-1'/> }
            </h2>

          { toggle ? <div>
             <ul className='absolute bg-gray-700 w-[200px] text-center mt-3 left-0 right-0
             ml-auto mr-auto rounded-md px-10 py-3'>

                { menu.map((item) => (
                    <li className='text-gray-400 text-[18px] font-medium cursor-pointer
                    hover:bg-gray-600 hover:text-white px-3 pb-2 py-1 rounded-md transition-all 
                    duration-500 ease-in-out'>{item.name}</li>
                ))}
            </ul>
            </div> : null}
        
        </div>

        <div className='flex align-middle gap-10'>
            <IoSearch  className='text-[35px] text-gray-300 cursor-pointer
                hover:bg-gray-700 px-[3px] pb-[2px] py-[2px] rounded-md hover:text-white transition-all 
                duration-500 ease-in-out'/>
            <h2 className='text-[20px] px-[10px] text-gray-300 border-[2px] rounded-full border-white '> R</h2>
        </div>
    </div>
  )
}

export default Header