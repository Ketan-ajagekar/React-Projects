import { Link } from "react-router-dom"; // Link is used to navigate between different routes.
import { NavLink } from "react-router-dom"; // NavLink applies active styles (color, size) when the route is active.

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <div className="container-fluid">

          <a className="navbar-brand" href="#">Welcome</a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul
              className="navbar-nav mb-2 mb-lg-0"
              style={{
                gap: "4px",
                display: "flex",
                justifyContent: "right",
                width: "100%",
              }}
            >

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "black",
                    fontSize: isActive ? "24px" : "18px",
                  })}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "black",
                    fontSize: isActive ? "24px" : "18px",
                  })}
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "black",
                    fontSize: isActive ? "24px" : "18px",
                  })}
                >
                  Contact
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/service"
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "black",
                    fontSize: isActive ? "24px" : "18px",
                  })}
                >
                  Service
                </NavLink>
              </li>

              {/* 🔥 Added Login / Logout Condition Here (No other changes) */}
              {localStorage.getItem("islogin") ? (
                <li className="nav-item">
                  <button
                    className="btn btn-danger"
                    onClick={() => localStorage.removeItem("islogin")}
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <button onClick={() => window.location.href = "/login"} className="nav-link">Login</button>
                </li>
              )}

            </ul>

          </div>

        </div>
      </nav>
    </>
  );
}

export default Nav;
