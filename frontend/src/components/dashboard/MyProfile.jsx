import React from 'react'
import { useSelector } from 'react-redux';

export const MyProfile = () => {
    
  const { user } = useSelector((state) => {
    return state.profile;
  });

  return (
    <div className="transition-all duration-300 md:ml-64 pt-16 md:pt-6 overflow-hidden">
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
  )
}

// export default MyProfile
