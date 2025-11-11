import { forwardRef } from 'react';

const Sidebar = forwardRef(function Sidebar(props, ref) {
  const sidebarItems = ["Home", "Products", "Services", "Contact"];

  return (
    <div ref={ref} className="sidebar">
      <div className="sidebar-content">
        {sidebarItems.map((item) => (
          <a key={item} href="#" className="sidebar-link">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
});

export default Sidebar;