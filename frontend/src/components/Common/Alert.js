import React from 'react';

const Alert = ({ type, message, onClose }) => {
  const alertClasses = {
    success: 'bg-green-900 border-green-700 text-green-300',
    error: 'bg-red-900 border-red-700 text-red-300',
    warning: 'bg-yellow-900 border-yellow-700 text-yellow-300',
    info: 'bg-blue-900 border-blue-700 text-blue-300',
  };

  return (
    <div className={`border rounded-lg p-4 mb-4 ${alertClasses[type]}`}>
      <div className="flex justify-between items-center">
        <span>{message}</span>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 text-current hover:opacity-75"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;
