import React from 'react'
import { payment } from '../assets/index';
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';
import {FaRegUser} from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
            <div className='bg-black text-white py-20 grid grid-cols-4 '>
                <div className='max-w-screen-xl mx-auto '>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-4xl font-bold'>E-<span className='text-green-800'>S</span>T<span className='text-yellow-800'>OR</span>E</h1>
                        <img src={payment} className='' width={200} alt="" />
                        <div className='flex flex-row gap-6 text-2xl'>
                            <BsFacebook className='cursor-pointer' />
                            <BsTwitter className='cursor-pointer' />

                            <BsLinkedin className='cursor-pointer' />
                            <BsInstagram className='cursor-pointer' />
                            <BsGithub className='cursor-pointer' />
                        </div>
                    </div>
                </div>
                {/* Location add */}
                <div>
                    <h2 className='font-bold text-2xl mb-6'>About Us</h2>
                    <div className=' flex flex-col gap-4'>
                    <h4>Chatkil, Noakhali</h4>
                    <h4>Phone: 01518690471</h4>
                    <h4>email: farhad@gmail.com</h4>
                    <h4>Website: farhad.com</h4>
                    </div>
                </div>
                {/* Profile  */}
                <div className='flex flex-col gap-3'>
                <h2 className='font-bold text-2xl mb-4'>Profile</h2>
                    <div className='flex items-center align-center gap-3 cursor-pointer'>
                        <FaRegUser/>
                        <h4>My Account</h4>
                    </div>
                    <div className='flex items-center align-center gap-3 cursor-pointer'>
                        <FaRegUser/>
                        <h4>Chackout</h4>
                    </div>
                    <div className='flex items-center align-center gap-3 cursor-pointer'>
                        <FaRegUser/>
                        <h4>Orders</h4>
                    </div>
                    <div className='flex items-center align-center gap-3 cursor-pointer'>
                        <FaRegUser/>
                        <h4>Privacy Policy</h4>
                    </div>
                </div>
                {/* Subscribe part */}
                <div className='flex flex-col justify-center align-middle px-2'>
                    <input type="text" className='bg-transparent border px-2 py-2 text-sm outline-none'  placeholder='Enter Your Email' />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Footer