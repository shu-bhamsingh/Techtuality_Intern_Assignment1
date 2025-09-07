import React from 'react';
import Header from './Header';

const Layout = ({ children, itemCount = 0 }) => {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header itemCount={itemCount} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;
