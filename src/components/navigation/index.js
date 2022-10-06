import React from 'react';
import { useState } from 'react';
import { userLogout } from '../../api/auth';
import { Logo } from '../../pages/Styles/style';
import Todo from '../todo';
function Navigation() {
  const [show, setShow] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const userName = user?.user_name.toUpperCase();
  return (
    <div className='fixed'>
      <div className='bg-[#bfeaf5] w-screen h-16 flex'>
        <div className='px-6 py-3'>
          <i className='fa-solid fa-bars text-2xl'></i>
        </div>
        <Logo>
          <div className='tracking-widest px-6 py-3 text-2xl font-medium'>
            DOCKET
          </div>
        </Logo>
        <div className='py-2 pl-32 sp:pl-10 '>
          <form>
            <input
              type='search'
              placeholder='search...'
              className='h-10 p-3 sp:w-80  md:hidden  w-96 border outline-none rounded-2xl bg-[#f8f7f7]'
            ></input>
          </form>
        </div>
        <div
          className='px-3 py-2 ml-auto bg-[#9e9595] sp:hidden my-2 mx-2 rounded-xl'
          onClick={() => {
            setShow(!show);
          }}
        >
          <i className='fa-solid fa-plus text-2xl '> add</i>
        </div>
        <div
          className='px-3 py-2 ml-auto  spm:hidden'
          onClick={() => {
            setShow(!show);
          }}
        >
          <i className='fa-solid fa-plus text-2xl '></i>
        </div>
        <div className=' px-3 py-2 my-2 mx-2 mb:hidden'>{userName}</div>
        <div
          className='bg-white px-3 py-2 my-2 mx-2 rounded-full'
          onClick={() => {
            localStorage.removeItem('user');
            userLogout();
          }}
        >
          <img src='' alt='pic'></img>
        </div>
      </div>
      <Todo show={show} setShow={setShow}></Todo>
    </div>
  );
}

export default Navigation;
