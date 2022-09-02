import React from 'react';
import { Logo } from '../../pages/Styles/style';
function Navigation() {
  return (
    <div>
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
        <div className='px-3 py-2 ml-auto bg-[#9e9595] sp:hidden my-2 mx-2 rounded-xl'>
          <i className='fa-solid fa-plus text-2xl '> add</i>
        </div>
        <div className='px-3 py-2 ml-auto  spm:hidden'>
          <i className='fa-solid fa-plus text-2xl '></i>
        </div>
        <div className='bg-white px-3 py-2 my-2 mx-2 mb:hidden'>shamil</div>
        <div className='bg-white px-3 py-2 my-2 mx-2 rounded-full'>
          <img src='' alt='pic'></img>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
