import { NavLink } from "react-router-dom"
import React from "react"

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
      <nav className="flex flex-wrap items-center justify-between px-2 bg-red-600 py-4">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex ">
              <p
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                href="#pablo"
              >
                Happy Cake
              </p>
              <img
                className="h-8 w-auto lg:block"
                src="https://cdn-icons-png.flaticon.com/512/2016/2016099.png"
                alt="Your Company"
              />
            </div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white bg-orange-500 rounded-lg hover:opacity-75"
                      : "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-300 hover:opacity-75"
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/Contact"}
                  className={({ isActive }) =>
                    isActive
                      ? "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white bg-orange-500 rounded-lg hover:opacity-75"
                      : "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-300 hover:opacity-75"
                  }
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}
