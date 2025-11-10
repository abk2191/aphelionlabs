function Navbar({ handleSideBar, isHamMenuClicked }) {
  const navItems = ["Home", "Services", "About", "Contact"];
  return (
    <>
      <div className="nav-bar">
        <button onClick={handleSideBar} className="ham-menu">
          {isHamMenuClicked ? (
            <i class="fa-solid fa-xmark"></i>
          ) : (
            <i class="fa-solid fa-bars"></i>
          )}
        </button>
        <div className="logo">
          <p style={{ color: "white", marginBottom: "10px" }}>
            <i class="fa-solid fa-meteor"></i>Aphelion Labs Inc.{" "}
          </p>
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
