import React from 'react';
import Navigation from '../../components/navigation';
import TodoCard from '../../components/todoCard';
function Dashboard() {
  return (
    <div className='w-screen h-screen bg-slate-600'>
      <Navigation></Navigation>
      <TodoCard></TodoCard>
    </div>
  );
}

export default Dashboard;
