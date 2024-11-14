import React, { useState } from 'react';
import { Home, UserCircle, BookOpen, ShoppingCart, Settings, LogOut, Menu, X } from 'lucide-react';
import { useSelector } from 'react-redux';

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <>
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
  </>
);

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

const ProfileDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { user } = useSelector((state) => {
    return state.profile;
  });

  return (
    <div className="min-h-screen relative bg-gray-900 text-gray-100">
      <Sidebar 
        isOpen={sidebarOpen} 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
      />
      
      <div className="transition-all duration-300 md:ml-64 pt-16 md:pt-6">
        <div className="p-4 md:p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">My Profile</h1>
            
            {/* Profile Card */}
            <div className="bg-gray-800 rounded-lg p-4 md:p-6 mb-4 md:mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold overflow-hidden">
                    <img src={user?.imageUrl} alt="profileImage" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-semibold">{user?.firstName} {" "} {user?.lastName}</h2>
                    <p className="text-gray-400 text-sm md:text-base">{user?.email}</p>
                  </div>
                </div>
                <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors w-full md:w-auto">
                  Edit
                </button>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-gray-800 rounded-lg p-4 md:p-6 mb-4 md:mb-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <h3 className="text-lg md:text-xl font-semibold">About</h3>
                <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors w-full md:w-auto">
                  Edit
                </button>
              </div>
              <p className="text-gray-400">Write Something About Yourself</p>
            </div>

            {/* Personal Details */}
            <div className="bg-gray-800 rounded-lg p-4 md:p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <h3 className="text-lg md:text-xl font-semibold">Personal Details</h3>
                <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors w-full md:w-auto">
                  Edit
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-gray-400 mb-1 md:mb-2 text-sm md:text-base">First Name</label>
                  <p className="font-medium">{user?.firstName}</p>
                </div>
                <div>
                  <label className="block text-gray-400 mb-1 md:mb-2 text-sm md:text-base">Last Name</label>
                  <p className="font-medium">{user?.lastName}</p>
                </div>
                <div>
                  <label className="block text-gray-400 mb-1 md:mb-2 text-sm md:text-base">Email</label>
                  <p className="font-medium break-all">{user?.email}</p>
                </div>
                <div>
                  <label className="block text-gray-400 mb-1 md:mb-2 text-sm md:text-base">Phone Number</label>
                  <p className="font-medium text-gray-500">Add Contact Number</p>
                </div>
                <div>
                  <label className="block text-gray-400 mb-1 md:mb-2 text-sm md:text-base">Gender</label>
                  <p className="font-medium text-gray-500">Add Gender</p>
                </div>
                <div>
                  <label className="block text-gray-400 mb-1 md:mb-2 text-sm md:text-base">Date of Birth</label>
                  <p className="font-medium">January 1, 1970</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;