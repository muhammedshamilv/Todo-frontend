import React from 'react';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { DeleteTodo, ListTodo } from '../../api/todo';
import { SelectTodo } from '../../api/todo';
import { useStore } from '../../store';
import Todo from '../todo';
const TodoCard = observer(() => {
  const { todoStore } = useStore();
  const { setTodoList, todoList } = todoStore;
  const [edit, setEdit] = useState(false);
  const [noteDetails, setNoteDetails] = useState();
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user?.id;

  useEffect(() => {
    (async () => {
      if (userId) {
        const resp = await ListTodo(userId);
        if (resp && resp.status === 200) {
          setTodoList(resp.data);
        } else {
          console.error(resp.data.error);
        }
      }
    })();
  }, [userId]);
  const onSelectTodo = async (noteId) => {
    const resp = await SelectTodo(noteId);
    if (resp && resp.status === 200) {
      setNoteDetails(resp.data);
    } else {
      console.error(resp.data.error);
    }
  };
  const onDelete = async (noteId) => {
    const resp = await DeleteTodo(noteId);
    if (resp && resp.status === 200) {
      alert('success');
    } else {
      console.error(resp.data.error);
    }
  };
  return (
    <div className='pt-16'>
      {edit && <Todo show={true} btn={'Edit'} noteDetails={noteDetails}></Todo>}
      <div className='px-10 pt-12 grid grid-cols-3 lgm:grid-cols-4 lgm:gap-x-1 md:grid-cols-1 md:place-items-center gap-3 overflow-x-hidden'>
        {todoList &&
          todoList.content &&
          todoList.content.rows.map((item, index) => (
            <div className='p-6 max-w-sm md:min-w-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                {item.title}
              </h5>
              <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                {item.description}
              </p>
              <div className='flex justify-between'>
                <div
                  onClick={() => {
                    setEdit(!edit);
                    onSelectTodo(item.id);
                  }}
                  className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Read more
                  <svg
                    aria-hidden='true'
                    className='ml-2 -mr-1 w-4 h-4'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                </div>
                <button
                  onClick={() => {
                    onDelete(item.id);
                  }}
                  class='inline-flex items-center justify-center w-8 h-8 mr-2 text-pink-100 transition-colors duration-150 bg-pink-700 rounded-lg focus:shadow-outline hover:bg-pink-800'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-4 w-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
});

export default TodoCard;
