import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand mb-0 h1" href="/">
          Contacts
        </a>
        <ul class="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              List
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/new">
              Add
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
