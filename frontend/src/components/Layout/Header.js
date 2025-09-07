import React from 'react';
import { useAuth } from '../../context/AuthContext';
import ProfileDropdown from '../Profile/ProfileDropdown';

const Header = ({ itemCount = 0 }) => {
  const { user } = useAuth();

  return (
    <header className="bg-dark-800/95 backdrop-blur-sm border-b border-dark-700 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-white">
                ItemVault
              </h1>
            </div>
          </div>
          
                 {user && (
                   <div className="flex items-center space-x-4">
                     <ProfileDropdown itemCount={itemCount} />
                   </div>
                 )}
        </div>
      </div>
    </header>
  );
};

export default Header;
