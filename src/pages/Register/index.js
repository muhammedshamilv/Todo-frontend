import React from 'react';
import { Button } from '../Styles/style';

function Register() {
  return (
    <div className='bg-gray-200 h-screen flex justify-center items-center'>
      <form className=''>
        <div className='bg-[#afccdd]/50 flex justify-center flex-col p-2 pl-6 pr-6  items-center gap-5 mdm:w-96 h-96 border rounded-2xl '>
          <h1 className='text-[#eb9c9c] text-2xl py-3'>Register</h1>
          <input
            type='text'
            className='w-full p-2 border border-emerald-200 outline-none rounded-xl'
            placeholder='user name'
            autoFocus
            required
          ></input>
          <input
            type='text'
            className='w-full p-2 border border-emerald-200 outline-none rounded-xl'
            placeholder='email'
            autoFocus
            required
          ></input>
          <input
            type='text'
            className='w-full p-2 border border-emerald-200 outline-none rounded-xl'
            placeholder='password'
            required
          ></input>
          <Button>
            <button
              className='btn2 px-11 py-6 relative border-none bg-[#01aaf870] outline-none rounded-xl uppercase font-semibold tracking-wider overflow-hidden hover:text-teal-600'
              type='button'
            >
              <span className='absolute inset-0 bg-white'></span>
              <span className='absolute inset-0 flex justify-center items-center font-bold'>
                register
              </span>
            </button>
          </Button>
          <p className='pb-5'>
            Already have an account?{' '}
            <a href='/' className='text-[#01aaf8] italic hover:text-[#eb9c9c] '>
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
