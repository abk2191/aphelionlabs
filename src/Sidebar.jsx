function Sidebar() {
  const sidebarItems = ["Home", "Products", "Services", "Contact"];

  return (
    <>
      <div className="sidebar">
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
