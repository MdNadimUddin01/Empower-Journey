import { BookOpen, LogOut, Menu, Settings, ShoppingCart, UserCircle } from 'lucide-react';
import React from 'react'


const SidebarLink = ({ icon, text, active }) => (
    <a 
      href="#" 
      className={`flex items-center space-x-2 p-3 rounded-lg transition-colors
        ${active ? 'bg-yellow-500 text-gray-900' : 'hover:bg-gray-700'}`}
    >
      {icon}
      <span>{text}</span>
    </a>
  );

function SideBar({ isOpen, toggleSidebar }) {
  return (
    <>
    <div className='flex min-w-[222px] flex-col border-r-[1px] border-r-richblack-700
        h-[calc[100vh-3.5rem)] bg-richblack-800 py-10 text-white'>

        {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-20 left-4 z-50 md:hidden bg-gray-800 p-2 rounded-lg text-gray-300"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
  
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
  
      {/* Sidebar */}
      <div className={`
        absolute left-0 top-0 h-screen bg-gray-800 text-gray-300 
        transition-all duration-300 z-40
        ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0'}
        md:w-64
      `}>
        <div className="p-4 pt-16 md:pt-4">
          <div className="mb-8 px-2">
            <h2 className="text-xl font-bold text-yellow-500">
              Dashboard
            </h2>
          </div>
          
          <nav className="space-y-2">
            <SidebarLink icon={<UserCircle className="w-5 h-5" />} text="My Profile" active />
            <SidebarLink icon={<BookOpen className="w-5 h-5" />} text="Enrolled Courses" />
            <SidebarLink icon={<ShoppingCart className="w-5 h-5" />} text="Cart" />
            <div className="border-t border-gray-700 my-4"></div>
            <SidebarLink icon={<Settings className="w-5 h-5" />} text="Settings" />
            <SidebarLink icon={<LogOut className="w-5 h-5" />} text="Logout" />
          </nav>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default SideBar

  
