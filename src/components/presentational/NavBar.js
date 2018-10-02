import React from 'react';

export default () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <span className="navbar-brand">U2b</span>
    <button className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-supported-content"
            aria-controls="navbar-supported-content"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div id="navbar-supported-content" className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home</a>
        </li>
      </ul>

      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-light my-2 my-sm-0" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  </nav>
);
