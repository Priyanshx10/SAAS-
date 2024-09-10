import React from 'react';
import Header from '@/components/Header';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className=' flex-1 flex flex-col min-h-screen bg-white'>
      <Header />
      <main className='flex-grow overflow-y-auto' >
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
