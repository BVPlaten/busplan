import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" onClick={toggleNav}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width="24"
                height="24"
                style={{ marginRight: "5px" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/Schedule" className="nav-link">
              Fahrplan
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/Filter" className="nav-link">
              Linienplan
            </Link>
          </li>
          {/*
          <li className="nav-item">
            <Link href="/StopDetailsSelection" className="nav-link">
              Haltestellenplan
            </Link>
          </li>
          */}
        </ul>
      </div>
    </nav>
  );
}
