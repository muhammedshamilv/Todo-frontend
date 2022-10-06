import React, { useState } from 'react';
import { AddTodo, EditTodo } from '../../api/todo';
import { Textarea } from '../../pages/Styles/style';
import { observer } from 'mobx-react-lite';

const Todo = observer(({ show, setShow, btn, noteDetails }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?.id;
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const onAdd = async () => {
    if (description) {
      const response = await AddTodo(userId, description, title);
      if (response && response.status === 200) {
        console.log('success');
        setShow(!show);
      } else if (response && response.status === 400) {
        alert(response.data);
      }
    }
  };
  const onEdit = async (noteId) => {
    if (description) {
      const response = await EditTodo(noteId, description, title);
      if (response && response.status === 200) {
        console.log('success');
        setShow(!show);
      } else if (response && response.status === 400) {
        alert(response.data);
      }
    }
  };
  return (
    <Textarea>
      {show && (
        <div>
          <div className='comment-text-area-heading'>
            <textarea
              className='textinput'
              placeholder='Title'
              defaultValue={
                noteDetails && noteDetails.title && noteDetails.title
              }
              onChange={(e) => setTitle(e.target.value)}
            ></textarea>
          </div>
          <div className='comment-text-area'>
            <textarea
              className='textinput'
              placeholder='Description'
              defaultValue={
                noteDetails &&
                noteDetails.description &&
                noteDetails.description
              }
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className='flex justify-center gap-3 my-2'>
            <div
              onClick={() =>
                btn ? onEdit(noteDetails && noteDetails.id) : onAdd()
              }
            >
              <button className='bg-[#d9aaaa] rounded-lg p-2'>
                {btn ? btn : 'ADD'}
              </button>
            </div>
            <div
              onClick={() => {
                setShow(!show);
              }}
            >
              <button className='bg-[#d9aaaa] rounded-lg p-2'>CLOSE</button>
            </div>
          </div>
        </div>
      )}
    </Textarea>
  );
});
export default Todo;
