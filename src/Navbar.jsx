function Navbar() {
  const navItems = ["Home", "Services", "About", "Contact"];
  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <p style={{ color: "white" }}>Aphelion Labs Inc.</p>
        </div>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li
              key={item}
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
