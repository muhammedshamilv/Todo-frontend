import React, { useState } from 'react';
import { userRegistration } from '../../api/auth';
import { Button } from '../Styles/style';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/index';
import { observer } from 'mobx-react-lite';
const Register = observer(() => {
  const { userStore } = useStore();
  const { setUser } = userStore;
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitForm = async () => {
    const response = await userRegistration(username, email, password);
    if (response && response.status === 200) {
      navigate('/dashboard');
      setUser(response.data);
    } else {
      alert('something went wrong');
    }
  };

  return (
    <div className='bg-gray-200 h-screen flex justify-center items-center'>
      <div className='bg-[#afccdd]/50 flex justify-center flex-col p-2 pl-6 pr-6  items-center gap-5 mdm:w-96 h-96 border rounded-2xl '>
        <h1 className='text-[#eb9c9c] text-2xl py-3'>Register</h1>
        <input
          type='text'
          className='w-full p-2 border border-emerald-200 outline-none rounded-xl'
          placeholder='user name'
          autoFocus
          required
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type='text'
          className='w-full p-2 border border-emerald-200 outline-none rounded-xl'
          placeholder='email'
          autoFocus
          required
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type='password'
          className='w-full p-2 border border-emerald-200 outline-none rounded-xl'
          placeholder='password'
          required
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <Button>
          <button
            onClick={() => onSubmitForm()}
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
    </div>
  );
});

export default Register;
