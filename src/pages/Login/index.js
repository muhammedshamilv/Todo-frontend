import React, { useState } from 'react';
import { Button } from '../Styles/style';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../api/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmitForm = async () => {
    const response = await userLogin(email, password);
    if (response && response.status === 200) {
      console.log('success');
      navigate('/dashboard');
    } else {
      alert(response.error);
    }
  };

  return (
    <div className='bg-gray-200 h-screen flex justify-center items-center'>
      <form className='' onSubmit={onSubmitForm}>
        <div className='bg-[#afccdd]/50 flex justify-center flex-col p-2 pl-6 pr-6  items-center gap-5 mdm:w-96 h-96 border rounded-2xl '>
          <h1 className='text-[#eb9c9c] text-2xl'>Login</h1>
          <input
            type='text'
            className='w-full p-2 border border-emerald-200 outline-none rounded-xl'
            placeholder='email'
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type='text'
            className='w-full p-2 border border-emerald-200 outline-none rounded-xl'
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <Button>
            <button
              // onClick={() => navigate('/dashboard')}
              className='btn2 px-10 py-5 relative border-none bg-[#01aaf870] outline-none rounded-xl uppercase font-semibold tracking-wider overflow-hidden hover:text-teal-600'
              type='button'
            >
              <span className='absolute inset-0 bg-white'></span>
              <span className='absolute inset-0 flex justify-center items-center font-bold'>
                login
              </span>
            </button>
          </Button>
          <p className=''>
            Don't have an account?{' '}
            <a
              href='/register'
              className='text-[#01aaf8] italic hover:text-[#eb9c9c] '
            >
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
