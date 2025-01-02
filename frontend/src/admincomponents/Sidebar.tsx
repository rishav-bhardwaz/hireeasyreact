import React from 'react';
import { motion } from 'framer-motion';
import { Building2, LayoutDashboard, MessageSquare, BriefcaseIcon, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SidebarItem = ({ icon, text, isActive, onClick }: {
  icon: React.ReactNode;
  text: string;
  isActive?: boolean;
  onClick?: () => void;
}) => (
  <motion.button
    onClick={onClick}
    className={`w-full flex items-center space-x-3 px-6 py-3 text-left relative ${
      isActive ? 'text-white' : 'text-indigo-100/70'
    }`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {isActive && (
      <motion.div
        layoutId="activeTab"
        className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-indigo-600/20"
        initial={false}
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      />
    )}
    <span className="text-xl relative">{icon}</span>
    <span className="font-medium relative">{text}</span>
  </motion.button>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = React.useState('Dashboard');

  const handleNavigation = (item: string, path: string) => {
    setActiveItem(item);
    navigate(path);
  };

  return (
    <motion.div 
      className="h-screen w-64 bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-900 text-white flex flex-col"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
    >
      <motion.div 
        className="p-6 flex items-center space-x-3 border-b border-indigo-700/20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Building2 size={32} className="text-indigo-400" />
        </motion.div>
        <span className="text-xl font-bold bg-gradient-to-r from-indigo-200 to-indigo-400 text-transparent bg-clip-text">
          Hireeasy
        </span>
      </motion.div>

      <motion.nav 
        className="flex-1 pt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <SidebarItem
          icon={<LayoutDashboard size={24} />}
          text="Dashboard"
          isActive={activeItem === 'Dashboard'}
          onClick={() => handleNavigation('Dashboard', '/admin/dashboard')}
        />
        <SidebarItem
          icon={<MessageSquare size={24} />}
          text="Responses"
          isActive={activeItem === 'Responses'}
          onClick={() => handleNavigation('Responses', '/admin/responses')}
        />
        <SidebarItem
          icon={<BriefcaseIcon size={24} />}
          text="Post Job"
          isActive={activeItem === 'Post Job'}
          onClick={() => handleNavigation('Post Job', '/admin/postjob')}
        />
      </motion.nav>

      <motion.div 
        className="border-t border-indigo-700/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <SidebarItem
          icon={<LogOut size={24} />}
          text="Logout"
          onClick={() => console.log('Logout clicked')}
        />
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
