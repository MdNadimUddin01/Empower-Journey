import React from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../services/operations/authAPI';

const UserMenu = ({ userName}) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-2 bg-gray-800 p-3 rounded-lg text-white w-48">
      <Link to="/dashboard/my-profile" className="flex items-center gap-2 px-2 py-1 hover:bg-gray-700 rounded-md transition-colors">
        <div className="bg-gray-700 p-1 rounded-full">
          <User size={20} className="text-gray-300" />
        </div>
        <span className="font-medium">{userName}</span>
      </Link>
      
      <button 
        onClick={() => dispatch(logout())}
        className="flex items-center gap-2 px-2 py-1 hover:bg-gray-700 rounded-md transition-colors text-gray-300 hover:text-white"
      >
        <svg 
          className="w-5 h-5 rotate-180" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;