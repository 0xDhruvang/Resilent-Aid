import React from 'react';
import { Navbar } from '@/components';

const AdminPanel = (props) => {
  console.log(props.data);


  return (
    <>
      
      <div className='text-[#FFFFFF]'>{props.data}</div>
      
      
    </>
  );
};

export default AdminPanel;