import React, { Component } from 'react';
import Footer from './Footer'
import Header2 from './Header2';

class About extends Component {
    render() {
        return (
            <div>
                <Header2 />

                {/*About us*/}
                <section className="text-center" id="about-us">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="Home">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">About Us</li>
                            </ol>
                        </nav>
                        {/*Row*/}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="heading-area mx-570 mb-5">
                                    <span className="sub-title">We Are Group 03</span>
                                    <h2 className="title">We have some <span className="alt-color js-rotating">great, ideal</span> talented
                    members</h2>
                                </div>
                            </div>
                        </div>
                        {/*Row*/}
                        <div className="row wow fadeInUp">
                            <div className="col-md-4">
                                <div className="team-item">
                                    {/*Team Image*/}
                                    <img alt="image" className="team-image" src="agency\img\6.jpg" style={{ width: '20.625em', height: '17.5em' }} />
                                    {/*Name*/}
                                    <div className="name">
                                        <img alt="shape" src="agency\img\shape-11.png" />
                                        <h6>Vũ Hoàng Trung</h6>
                                    </div>
                                    {/*Designation*/}
                                    <p className="designation mb-2">MSSV: 18130259</p>
                                    <p>Lớp: DH18DTB</p>
                                    {/*Team Social*/}
                                    <div className="team-social social-icon-bg-hvr">
                                        <a href="http://mywebhci.tk"><i aria-hidden="true" className="fas fa-code" /></a>
                                        <a href="https://www.facebook.com/trung926"><i aria-hidden="true" className="fab fa-facebook-f" /></a>
                                        <a href="http://youtube.com"><i aria-hidden="true" className="fab fa-youtube" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="team-item">
                                    {/*Team Image*/}
                                    <img alt="image" className="team-image" src="agency\img\romeo.jpg" style={{ width: '20.625em', height: '17.5em' }} />
                                    {/*Name*/}
                                    <div className="name">
                                        <img alt="shape" src="agency\img\shape-11.png" />
                                        <h6>Nguyễn Hoàng Minh</h6>
                                    </div>
                                    {/*Designation*/}
                                    <p className="designation mb-2">MSSV: 18130141</p>
                                    <p>Lớp:DH18DTB</p>
                                    {/*Team Social*/}
                                    <div className="team-social social-icon-bg-hvr">
                                        <a href="http://minhromeo.tk"><i aria-hidden="true" className="fas fa-code" /></a>
                                        <a href="https://www.facebook.com/yeumeonhungkhongcomeo"><i aria-hidden="true" className="fab fa-facebook-f" /></a>
                                        <a href="http://youtube.com"><i aria-hidden="true" className="fab fa-youtube" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="team-item">
                                    {/*Team Image*/}
                                    <img alt="image" className="team-image" src="agency\img\CVMQ.jpg" style={{ width: '20.625em', height: '17.5em' }} />
                                    {/*Name*/}
                                    <div className="name">
                                        <img alt="shape" src="agency\img\shape-11.png" />
                                        <h6>Châu Vũ Minh Quân</h6>
                                    </div>
                                    {/*Designation*/}
                                    <p className="designation mb-2">MSSV: 18130185</p>
                                    <p>Lớp:DH18DTB</p>
                                    {/*Team Social*/}
                                    <div className="team-social social-icon-bg-hvr">
                                        <a href="http://cvminhquan.tk"><i aria-hidden="true" className="fas fa-code" /></a>
                                        <a href="https://www.facebook.com/CVMQLuke/"><i aria-hidden="true" className="fab fa-facebook-f" /></a>
                                        <a href="http://youtube.com"><i aria-hidden="true" className="fab fa-youtube" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4" style={{ margin: '40px auto' }}>
                                <div className="team-item">
                                    {/*Team Image*/}
                                    <img alt="image" className="team-image" src="agency\img\levanhao.jpg" style={{ width: '20.625em', height: '17.5em' }} />
                                    {/*Name*/}
                                    <div className="name">
                                        <img alt="shape" src="agency\img\shape-11.png" />
                                        <h6>Lê Văn Hào</h6>
                                    </div>

                                    {/*Designation*/}
                                    <p className="designation mb-2">MSSV: 18130070</p>
                                    <p>Lớp:DH18DTB</p>
                                    {/*Team Social*/}

                                    <div className="team-social social-icon-bg-hvr">
                                        <a href="http://levanhaohci.tk"><i aria-hidden="true" className="fas fa-code" /></a>
                                        <a href="https://www.facebook.com/haole1411/"><i aria-hidden="true" className="fab fa-facebook-f" /></a>
                                        <a href="http://youtube.com"><i aria-hidden="true" className="fab fa-youtube" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4" style={{ margin: '40px auto' }}>
                                <div className="team-item">
                                    {/*Team Image*/}
                                    <img alt="image" className="team-image" src="agency\img\duc.jpg" style={{ width: '20.625em', height: '17.5em' }} />
                                    {/*Name*/}
                                    {/*Name*/}
                                    <div className="name">
                                        <img alt="shape" src="agency\img\shape-11.png" />
                                        <h6>Đào Xuân Đức</h6>
                                    </div>
                                    {/*Designation*/}
                                    <p className="designation mb-2">MSSV: 18130046</p>
                                    <p>Lớp:DH18DTB</p>
                                    {/*Team Social*/}
                                    <div className="team-social social-icon-bg-hvr">
                                        <a href="http://daoxuanduchci.tk"><i aria-hidden="true" className="fas fa-code" /></a>
                                        <a href="https://www.facebook.com/Tho.245"><i aria-hidden="true" className="fab fa-facebook-f" /></a>
                                        <a href="http://youtube.com"><i aria-hidden="true" className="fab fa-youtube" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*About us End*/}
                <Footer />


            </div>
        );
    }
}

export default About;