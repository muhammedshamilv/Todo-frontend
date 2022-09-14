import React, { useState } from 'react';
import { AddTodo } from '../../api/todo';
import { Textarea } from '../../pages/Styles/style';
import { observer } from 'mobx-react-lite';

const Todo = observer(() => {
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user.id;
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const onAdd = async () => {
    if (description) {
      const response = await AddTodo(userId, description, title);
      if (response && response.status === 200) {
        console.log('success');
      } else if (response && response.status === 400) {
        alert(response.data);
      }
      console.log('user', response.data);
    }
  };
  return (
    <Textarea>
      <div>
        <div className='comment-text-area-heading'>
          <textarea
            className='textinput'
            placeholder='Title'
            onChange={(e) => setTitle(e.target.value)}
          ></textarea>
        </div>
        <div className='comment-text-area'>
          <textarea
            className='textinput'
            placeholder='Description'
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className='flex justify-center gap-3 my-2'>
          <div onClick={() => onAdd()}>
            <button className='bg-[#d9aaaa] rounded-lg p-2'>ADD</button>
          </div>
          <div>
            <button className='bg-[#d9aaaa] rounded-lg p-2'>CLOSE</button>
          </div>
        </div>
      </div>
    </Textarea>
  );
});
export default Todo;
