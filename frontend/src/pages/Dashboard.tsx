import Sidebar from "../admincomponents/Sidebar"
import { motion } from "framer-motion"
const Dashboard = () => {
  return (
    <>
        <div className="flex">
    <Sidebar />
    <motion.main 
        className="flex-1 bg-gradient-to-br from-indigo-50 to-white min-h-screen p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h1 className="text-2xl font-bold text-indigo-900 mb-6">
            Dashboard Overview
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">Total Applications</h2>
              <p className="text-3xl font-bold text-indigo-600">1,234</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">Active Jobs</h2>
              <p className="text-3xl font-bold text-indigo-600">56</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-2">New Messages</h2>
              <p className="text-3xl font-bold text-indigo-600">28</p>
            </div>
          </div>
        </motion.div>
      </motion.main>
      </div>
    </>
  )
}

export default Dashboard