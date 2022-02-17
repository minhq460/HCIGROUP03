import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                {/*Animated Cursor*/}
                <div id="aimated-cursor">
                    <div id="cursor">
                        <div id="cursor-loader" />
                    </div>
                </div>
                {/*Animated Cursor End*/}
                {/* Preloader */}
                <div className="preloader">
                    <div className="box" />
                </div>
                {/* Ink Transition */}
                <div className="cd-transition-layer visible opening">
                    <div className="bg-layer" />
                </div>
                {/*/Preloader */}
                {/*Header Start*/}
                <header className="cursor-light">
                    {/*Navigation*/}
                    <nav className="navbar navbar-top-default navbar-expand-lg navbar-gradient nav-icon alt-font">
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
                                <nav className="navbar full-menu-navigation left">
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
                                    <span className="full-menu-dot" style={{ transform: 'scale(0)' }} />
                                </nav>
                                <img alt="shape" src="agency\img\shape-8.png" />
                            </div>
                            <div className="shape-right">
                                <div className="full-menu-detail hide-cursor">
                                    <h6 className="title">Press Contact</h6>
                                    <p><i className="fas fa-user-alt" />David Trung</p>
                                    <p><i className="fas fa-mobile-alt" />+84 974 838 004</p>
                                    <p><i className="fas fa-envelope" />noname01256@gmail.com</p>
                                </div>
                                <img alt="shape" src="agency\img\shape-7.png" />
                            </div>
                        </div>
                    </div>
                </header>
                {/*Header End*/}
            </div>
        )
    }
}

export default Header