const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <button onClick={toggleSidebar} className="absolute top-4 right-4 text-gray-700 focus:outline-none">
          Close
        </button>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Notifications</h2>
          {/* User Card Examples */}
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h3 className="font-semibold">User 1</h3>
            <p className="text-sm">Notification details...</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h3 className="font-semibold">User 2</h3>
            <p className="text-sm">Notification details...</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h3 className="font-semibold">User 3</h3>
            <p className="text-sm">Notification details...</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  