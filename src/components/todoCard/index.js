import React from 'react';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { ListTodo } from '../../api/todo';
import { useStore } from '../../store';

const TodoCard = observer(() => {
  const { todoStore } = useStore();
  const { setTodoList, todoList } = todoStore;
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
  return (
    <div className='px-10 py-3 grid grid-cols-3 lgm:grid-cols-4 lgm:gap-x-1 md:grid-cols-2 gap-3 overflow-x-hidden'>
      {todoList &&
        todoList.content &&
        todoList.content.rows.map((item, index) => (
          <div className='p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {item.title}
            </h5>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              {item.description}
            </p>
            <a
              href='#'
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
            </a>
          </div>
        ))}
    </div>
  );
});

export default TodoCard;
