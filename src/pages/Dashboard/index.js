import React from 'react';
import Navigation from '../../components/navigation';
import Todo from '../../components/todo';
function Dashboard() {
  return (
    <div className='w-screen h-screen bg-slate-600'>
      <Navigation></Navigation>
      <Todo></Todo>
    </div>
  );
}

export default Dashboard;
