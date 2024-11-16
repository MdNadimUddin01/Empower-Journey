import React, { useEffect, useState } from "react";
import {
  Home,
  UserCircle,
  BookOpen,
  ShoppingCart,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  matchPath,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { sidebarLinks } from "../../data/dashboard-links";
import * as Icons from "react-icons/vsc";
import ConfirmationModal from "../components/ConfirmationModal";
import { logout } from "../services/operations/authAPI";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  );
  const { loading: authLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirmationModal, setConfirmationModal] = useState(null);

  if (profileLoading || authLoading) {
    return <div className="mt-10">Loading...</div>;
  }

  const SettingIcon = Icons["VscSettingsGear"];

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="bg-gray-800 rounded-lg">
        <button
          onClick={toggleSidebar}
          className="fixed top-16 left-4 z-50 md:hidden p-2 rounded-lg text-gray-300"
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
        <div
          className={` bg-slate-800
      absolute left-0 -top-4 h-screen text-gray-300 
      transition-all duration-300 z-40 
      ${isOpen ? "translate-x-0 w-64" : "-translate-x-full md:translate-x-0"}
      md:w-64
    `}
        >
          <div className="p-4 pt-16 md:pt-4">
            <div className="mb-8 px-2">
              <h2 className="text-xl font-bold text-yellow-500">Dashboard</h2>
            </div>

            <nav className="space-y-2">
              {sidebarLinks.map((link) => {
                if (link.type && user?.accountType !== link.type) return null;
                const Icon = Icons[link.icon];
                return (
                  <SidebarLink
                    key={link.id}
                    link={link}
                    icon={<Icon className="text-lg" />}
                  />
                );
              })}
            </nav>

            <div className="flex flex-col">
              <SidebarLink
                link={{ name: "Settings", path: "dashboard/settings" }}
                icon={<SettingIcon className="text-lg" />}
              />

              <button
                onClick={() =>
                  setConfirmationModal({
                    text1: "Are You Sure ?",
                    text2: "You will be logged out of your Account",
                    btn1Text: "Logout",
                    btn2Text: "Cancel",
                    btn1Handler: () => dispatch(logout(navigate)),
                    btn2Handler: () => setConfirmationModal(null),
                  })
                }
                className="text-sm font-medium flex hover:bg-gray-700 items-center space-x-2 p-3 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-x-2 ">
                  <Icons.VscSignOut className="text-lg" />
                  <span>Logout</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {confirmationModal && (
          <ConfirmationModal modalData={confirmationModal} />
        )}
      </div>
    </>
  );
};

const SidebarLink = ({ icon, link }) => {
  // console.log(link)
  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return (
    <NavLink
      to={link.path}
      className={`flex items-center space-x-2 p-3 rounded-lg transition-colors
      ${
        matchRoute(link.path)
          ? "bg-yellow-400 text-gray-900"
          : "hover:bg-gray-700"
      }`}
    >
      {icon}
      <span>{link.name}</span>
    </NavLink>
  );
};

const ProfileDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { user } = useSelector((state) => {
    return state.profile;
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setShowScrollTop(window.scrollY > 400);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen relative bg-gray-900 text-gray-100">
      <div
        className="fixed  inset-0 z-0 pointer-events-none transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(59, 130, 246, 0.1) 0%, 
            rgba(99, 102, 241, 0.05) 50%, 
            rgba(255, 255, 255, 0) 100%)`,
        }}
      />

      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="mt-6 overflow-auto scrollbar-hide">
        <div className="mx-auto w-11/12 max-w-[1000px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
