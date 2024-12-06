import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import * as Icons from "react-icons/fa";
import { PiUserCircleThin } from "react-icons/pi";

export default function Header() {
  return (
    <div className="bg-[#0078d4] w-full ">
      <div className="px-6">
        <nav className="h-[73px] flex items-center justify-between w-full">
          <div className="flex items-center w-48 ">
            <a className="text-white text-xl" href="#">
              {/* <img src={menu} className="menu-svg" alt="Menu" /> */}
              <BsGrid3X3GapFill />
            </a>
            <strong style={{ fontSize: "16px" }} className="text-white ml-4">
              Cuenta Microsoft
            </strong>
          </div>

          <div className="w-full flex items-center   justify-end lg:justify-between  ">
            <div  className="hidden lg:flex" >
              <ul className=" flex text-white ">
                <li className="nav-item mx-4 ">
                  <a className="nav-link" href="#">
                    <span className="wrapper-50">
                      <span className="divider-51"></span>
                    </span>
                  </a>
                </li>
                <li className="mx-4 ">
                  <a href="#" className="nav-link">
                    Tu información
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Privacidad
                  </a>
                </li>
                <li className="mx-4 ">
                  <a
                    className="nav-link"
                    href="#"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    <strong style={{ fontFamily: "'Segoe UI semibold'" }}>
                      Seguridad
                    </strong>
                  </a>
                </li>
                <li className="mx-4 ">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "whitesmoke", fontSize: "14px" }}
                  >
                    Pago y facturación
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Servicios y suscripciones
                  </a>
                </li>
                <li className="mx-4 ">
                  <a
                    className="nav-link"
                    href="#"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Dispositivos
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    tabIndex="-1"
                    aria-disabled="true"
                  >
                    Familia
                  </a>
                </li>
              </ul>
            </div>

            <span>
              <PiUserCircleThin className="text-white text-6xl" />
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
}
