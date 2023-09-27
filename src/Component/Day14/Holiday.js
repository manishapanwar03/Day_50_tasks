import React,{useState} from 'react';

function HolidayComponent() {
  return (
    <div className="container">
      <center>
        <h1 className="h1">
          <strong>
            <i>Holiday</i>
          </strong>
        </h1>
      </center>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#" id="home">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Templates <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Gallery <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Blog<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                About <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Contact <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Enter Keyword here...."
              aria-label="Search"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Go
            </button>
          </form>
        </div>
      </nav>
      <div className="image-container">
        <img
          src="https://us.123rf.com/450wm/janoka82/janoka821907/janoka82190700001/129683929-wonderful-travel-and-touristic-place-famous-and-spectacular-lake-bled-with-picturesque-pilgrimage.jpg?ver=6"
          className="img_1"
          alt="Holiday"
        />
      </div>
      {/* Rest of your HTML content */}
    </div>
  );
}

export default HolidayComponent;
