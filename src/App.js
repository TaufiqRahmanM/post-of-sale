import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import logo1 from "../public/img/minuman.png";
import "./App.css";
function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <a class="navbar-brand ml-5" href="#">
          <h3>Point Of Sale</h3>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav  ml-auto ">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row">
          <div className="col card ">
            <center>
              <div className="row text-center">{/* <img src={logo1s} /> */}</div>
              <div className="row">Minuman</div>
            </center>
          </div>
          <div className="col card">
            <div className="row">
              <div className="col text-center">asdasd</div>
            </div>
            <div className="row">Minuman</div>
          </div>
          <div className="col card">
            <div className="row">asdasd</div>
            <div className="row">Minuman</div>
          </div>
          <div className="col card">
            <div className="row">asdasd</div>
            <div className="row">Minuman</div>
          </div>
          <div className="col card">
            <div className="row">asdasd</div>
            <div className="row">Minuman</div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row ">
          <div className="col-8 bg-white shadow">
            <div className="row ">
              <h4>Daftar Produk</h4>
            </div>
            <div className="row">
              <div className="col">
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"></input>
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="col">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div classsName="row"></div>
          </div>
          <div className="col bg-white ml-3 shadow">
            <h4>Hasil</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* <div className="col">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
</div>; */
}
