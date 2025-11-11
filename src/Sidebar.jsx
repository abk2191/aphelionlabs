function Sidebar({ isActive }) {
  const sidebarItems = ["Home", "Products", "Services", "Contact"];

  return (
    <>
      <div
        className={`sidebar ${isActive ? "active-class" : "inactive-class"}`}
      >
        <div className="sidebar-content">
          {sidebarItems.map((item) => (
            <a key={item} href="#" className="sidebar-link">
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
