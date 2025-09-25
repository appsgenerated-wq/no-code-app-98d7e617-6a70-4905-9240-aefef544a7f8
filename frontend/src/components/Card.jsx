import React from 'react';

const Card = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {title && <h3 className="text-xl font-semibold text-gray-900 mb-4 p-6 border-b border-gray-200">{title}</h3>}
      <div className={`${!title && 'p-6'}`}>
        {children}
      </div>
    </div>
  );
};

export default Card;