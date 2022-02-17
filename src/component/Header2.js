import React, { Component } from 'react';

class Header2 extends Component {
  render() {
    return (
      <div>
        {/*Header Start*/}
        <header className="cursor-light">
          {/*Navigation*/}
          <nav className="navbar navbar-top-default1 navbar-expand-lg navbar-gradient nav-icon alt-font show">
            <div className="container">
              <a className="logo link" href="Home" title="Logo">
                {/*Logo Default*/}
                <img alt="logo" className="logo-dark default" src="agency\img\logo.png" />
              </a>
              {/*Nav Links*/}
              <div className="collapse navbar-collapse" id="agency">
                <div className="navbar-nav ml-auto">
          
                <a className="nav-link link" href="Home">Home</a>
                            <a className="nav-link link " href="About">About Us</a>
                            <a className="nav-link link" href="GroupDiary">Group Diary</a>
                            <a className="nav-link link" href="Technology">Technology</a>
                            <a className="nav-link link" href="Project">Project</a>
                            <a className="nav-link link" href="StyleGuide">Style Guide</a>
                            <a className="nav-link link " href="Result">Result</a>
                            <a className="nav-link link " href="Contact">Contact Us</a>
                            
                  <span className="menu-line"><i aria-hidden="true" className="fa fa-angle-down" /></span>
                </div>
                <a className="btn btn-medium btn-rounded btn-transparent-white btn-hvr-white ml-3" href="http://t4kshop.tk" target="blank">Go To Project
                            <div className="btn-hvr-setting">
                    <ul className="btn-hvr-setting-inner">
                      <li className="btn-hvr-effect" />
                      <li className="btn-hvr-effect" />
                      <li className="btn-hvr-effect" />
                      <li className="btn-hvr-effect" />
                    </ul>
                  </div>
                </a>
              </div>
              {/*Menu Button*/}
              <button className="fullnav-toggler link" id="full-menu-1" type="button">
                <span className="line" />
                <span className="line" />
                <span className="line" />
              </button>
            </div>
          </nav>
          {/*Full menu*/}
          <div className="nav-holder main style-2 alt-font">
            {/*Menu Button*/}
            <button className="fullnav-close link" type="button">
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </button>
            <div className="container">
              <div className="shape-left">
                <img src="agency\img\shape-8.png" alt="menushape" />
                <nav className="navbar full-menu-navigation">
                <ul className="list-unstyled">
                                        <li><a className="link" href="Home">
                                            <span className="anchor-circle" />
                                            <span className="anchor-text">Home</span>
                                        </a></li>
                                        <li><a className="link scroll" href="#about-us">
                                            <span className="anchor-circle" />
                                            <span className="anchor-text">About Us</span>
                                        </a></li>
                                        <li><a className="link" href="GroupDiary">
                                            <span className="anchor-circle" />
                                            <span className="anchor-text">Group Diary</span>
                                        </a></li>
                                        <li><a className="link" href="Technology">
                                            <span className="anchor-circle" />
                                            <span className="anchor-text">Technology</span>
                                        </a></li>
                                        <li><a className="link" href="Project">
                                            <span className="anchor-circle" />
                                            <span className="anchor-text">Project</span>
                                        </a></li>
                                        <li><a className="link" href="StyleGuide">
                                            <span className="anchor-circle" />
                                            <span className="anchor-text">Style Guide</span>
                                        </a></li>
                                        <li><a className="link scroll" href="Contact">
                                            <span className="anchor-circle" />
                                            <span className="anchor-text">Contact Us</span>
                                        </a></li>
                                        <li><a className="link scroll" href="Result">
                                            <span className="anchor-circle" />
                                            <span className="anchor-text">Result</span>
                                        </a></li>
                                    </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header2;