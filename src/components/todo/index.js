import React from 'react';
import { Textarea } from '../../pages/Styles/style';

function Todo() {
  return (
    <Textarea>
      <div>
        <div className='comment-text-area'>
          <textarea className='textinput' placeholder='Comment'></textarea>
        </div>
        <div className='flex justify-center gap-3 my-2'>
          <div>
            <button className='bg-[#d9aaaa] rounded-lg p-2'>ADD</button>
          </div>
          <div>
            <button className='bg-[#d9aaaa] rounded-lg p-2'>CLOSE</button>
          </div>
        </div>
      </div>
    </Textarea>
  );
}

export default Todo;
