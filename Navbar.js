import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className="sideBar">
                <div className="startPoint">
                  <ul className="realtimeUpdate">
                    <li className="logo">
                      <span>
                        StreetSm
                        <img src={item.logo} />
                        rt
                      </span>
                    </li>
                    <li className="packageName">Package#{item.package}</li>
                    <li className="info1">
                      <li className="starting">
                        <div className="start">
                          <img src={item.startIcon} />
                          <span>{item.start}</span>
                        </div>
                        <div className="start">
                          <img src={item.desIcon} />
                          <span>{item.des}</span>
                        </div>
                      </li>
                      <li className="starting1">
                        <div className="start">
                          <span>ETA: {item.eta}</span>
                        </div>
                        <div className="start">
                          <img src={item.directionIcon} />
                          <span>{item.direction}</span>
                        </div>
                      </li>
                    </li>
                    <li className="info2">
                      <li className="otherInfo">
                        <div className="currentLocation">
                          Current Location: {item.currentLocation}
                        </div>
                        <div className="nextLocation">
                          Next Location: {item.nextLocation}
                        </div>
                        <div className="mode">Mode: {item.mode}</div>
                      </li>
                    </li>
                    <li className="packageName">Package info:</li>
                    <li className="info3">
                      <li>
                        <div className="size">size: {item.size}</div>
                      </li>
                      <li className="countList">
                        <div className="count">count: {item.count}</div>
                      </li>
                    </li>
                  </ul>
                  <ul className="menuBar">
                    <li className="menuItem">
                      <Link to="/">
                        <img src={item.rtMapIcon} />
                        <span>{item.rtMap}</span>
                      </Link>
                    </li>
                    <li className="menuItem">
                      <Link to="/schedule">
                        <img src={item.time2} />

                        <span>{item.sched}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="navbar-toggle">
          <Link to="#" className="menu-bars">
            <img
              src="https://anima-uploads.s3.amazonaws.com/projects/6052d14aa1a93645d2c76b5d/releases/6058c2b68a1478626e8615e5/img/vector-4@2x.svg"
              onClick={showSidebar}
            />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
