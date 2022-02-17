import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Header2 from './Header2';

class requirement extends Component {
    render() {
        return (

            <div>
                <Header2/>

                <div>
                    <section>
                        <main className="container">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="Home">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Project</li>
                            </ol>
                        </nav>
                        <div className="col-md-12 text-center">
                            <div className="heading-area mx-570 mb-lg-4 mb-3 ">
                                <h2 className="title"><span className="alt-color js-rotating"> Overview Project</span> </h2>
                            </div>
                        </div>
                        <hr/>
                            <div className="p-5">

                                <div className="row">
                                    <div className="col-md-12">
                                    <div className="oneMusic-tabs-content">
                                        <nav>
                                            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist" >
                                                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true"><b>Requirement</b></a>
                                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"><b>Design</b></a>
                                                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"><b>Implement</b></a>
                                            </div>
                                        </nav>
                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                                <div className="content p-5">
                                                    <div className="row">
                                                        <div className="table-responsive">
                                                            <table>
                                                                <thead>
                                                                    <tr>
                                                                        <th><strong>STT</strong></th>
                                                                        <th><strong>Chức năng</strong></th>
                                                                        <th><strong>Người xuất</strong></th>
                                                                        <th><strong>Thiết kế</strong></th>
                                                                        <th><strong>Hiện thực</strong></th>
                                                                        <th><strong>Thời gian dự kiến</strong></th>
                                                                        <th><strong>Tiến trình</strong></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>1</td>
                                                                        <td>Đăng nhập</td>
                                                                        <td>Cả nhóm</td>
                                                                        <td>Đào Xuân Đức</td>
                                                                        <td>Đào Xuân Đức</td>
                                                                        <td>08/6/2020 - 22/6/2020</td>
                                                                        <td>Hoàn thành</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>2</td>
                                                                        <td>Đăng kí</td>
                                                                        <td>Cả nhóm</td>
                                                                        <td>Đào Xuân Đức</td>
                                                                        <td>Đào Xuân Đức</td>
                                                                        <td>08/6/2020 - 22/6/2020</td>
                                                                        <td>Hoàn thành</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>3</td>
                                                                        <td>Quên mật khẩu </td>
                                                                        <td>Cả nhóm</td>
                                                                        <td>Đào Xuân Đức</td>
                                                                        <td>Đào Xuân Đức</td>
                                                                        <td>22/6/2020 - 06/7/2020</td>
                                                                        <td>Hoàn thành</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>4</td>
                                                                        <td>Thanh toán</td>
                                                                        <td>Cả nhóm</td>
                                                                        <td>Nguyễn Hoàng Minh</td>
                                                                        <td>Nguyễn Hoàng Minh</td>
                                                                        <td>08/6/2020 - 22/6/2020</td>
                                                                        <td>Hoàn thành</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>5</td>
                                                                        <td>Tìm kiếm sản phẩm</td>
                                                                        <td>Cả nhóm</td>
                                                                        <td>Nguyễn Hoàng Minh</td>
                                                                        <td>Nguyễn Hoàng Minh</td>
                                                                        <td>08/6/2020 - 22/10/2020</td>
                                                                        <td>Hoàn thành</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>6</td>
                                                                        <td>Tìm kiếm sản phẩm</td>
                                                                        <td>Cả nhóm</td>
                                                                        <td>Lê Văn Hào</td>
                                                                        <td>Lê Văn Hào</td>
                                                                        <td>08/6/2020 - 22/6/2020</td>
                                                                        <td>Hoàn thành</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>7</td>
                                                                        <td>Thêm vào giỏ hàng</td>
                                                                        <td>Cả nhóm</td>
                                                                        <td>Châu Vũ Minh Quân</td>
                                                                        <td>Châu Vũ Minh Quân</td>
                                                                        <td>08/6/2020-22/6/2020</td>
                                                                        <td>Hoàn thành</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>8</td>
                                                                        <td>Tìm kiếm sản phẩm</td>
                                                                        <td>Cả nhóm</td>
                                                                        <td>Châu Vũ Minh Quân</td>
                                                                        <td>Châu Vũ Minh Quân</td>
                                                                        <td>08/6/2020-22/6/2020</td>
                                                                        <td>Hoàn thành</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>9</td>
                                                                        <td>Giỏ hàng</td>
                                                                        <td>Cả nhóm</td>
                                                                        <td>Châu Vũ Minh Quân</td>
                                                                        <td>Châu Vũ Minh Quân</td>
                                                                        <td>08/6/2020-22/6/2020</td>
                                                                        <td>Hoàn thành</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>10</td>
                                                                        <td>Thêm vào giỏ hàng</td>
                                                                        <td>Cả nhóm</td>
                                                                        <td>Vũ Hoàng Trung</td>
                                                                        <td>Vũ Hoàng Trung</td>
                                                                        <td>08/6/2020-22/6/2020</td>
                                                                        <td>Hoàn thành</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>11</td>
                                                                        <td>Tìm kiếm sản phẩm</td>
                                                                        <td>Cả nhóm</td>
                                                                        <td>Vũ Hoàng Trung</td>
                                                                        <td>Vũ Hoàng Trung</td>
                                                                        <td>08/6/2020-22/6/2020</td>
                                                                        <td>Hoàn thành</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>12</td>
                                                                        <td>Thanh toán</td>
                                                                        <td>Cả nhóm</td>
                                                                        <td>Vũ Hoàng Trung</td>
                                                                        <td>Vũ Hoàng Trung</td>
                                                                        <td>08/6/2020-22/6/2020</td>
                                                                        <td>Hoàn thành</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <a>
                                                    </a></div><a>
                                                </a></div><a>
                                            </a><div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><a>
                                            </a><div className="content "><a>
                                                <div className="col-sm-12" style={{paddingTop: '48px',fontFamily:'Poppins'}}>
                                                    
                                                    {/* ##### Accordians ##### */}

                                                    <div className="accordions mb-100" id="accordion" role="tablist" aria-multiselectable="true">
                                                        {/* single accordian area */}
                                                        <div className="panel single-accordion">
                                                                <h6><a role="button" className aria-expanded="true" aria-controls="collapseOne" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">1. Đăng Nhập
                <span className="accor-open"><i className="fa fa-plus" aria-hidden="true" /></span>
                                                                    <span className="accor-close"><i className="fa fa-minus" aria-hidden="true" /></span>
                                                                </a></h6>
                                                                <div id="collapseOne" className="accordion-content collapse show">
                                                                    <div className="card-body">
                                                                        <div className="row ml-5">
                                                                            <div className="col-sm-6">
                                                                                <div className="card" style={{ width: '400px' }}>
                                                                                    <img className="card-img-top" src="agency/img/loginGiay.jpg" alt="Card image" />
                                                                                    <div className="card-body">
                                                                                        <a href="agency/img/loginGiay.jpg" download="agency/img/loginGiay.jpg">
                                                                                            <button type="button" className="btn btn-danger button-design"><i className="fa fa-download" aria-hidden="true" /> Dowload File </button>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-6">
                                                                                <div className="card" style={{ width: '400px' }}>
                                                                                    <img className="card-img-top" src="agency/img/login.png" alt="Card image" />
                                                                                    <div className="card-body">
                                                                                        <a href="agency/img/login.png" download="agency/img/login.png">
                                                                                            <button type="button" className="btn btn-danger button-design"><i className="fa fa-download" aria-hidden="true" /> Dowload File </button>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <a href="#" download="Login">
                                                                                <button type="button" className="btn btn-danger button-dowall"><i className="fa fa-download" aria-hidden="true" /> Dowload File All</button>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* single accordian area */}
                                                            <div className="panel single-accordion">
                                                                <h6><a role="button" className aria-expanded="true" aria-controls="collapse2" data-toggle="collapse" data-parent="#accordion" href="#collapse2">2. Đăng Kí
                <span className="accor-open"><i className="fa fa-plus" aria-hidden="true" /></span>
                                                                    <span className="accor-close"><i className="fa fa-minus" aria-hidden="true" /></span>
                                                                </a></h6>
                                                                <div id="collapse2" className="accordion-content collapse ">
                                                                    <div className="card-body">
                                                                        <div className="row ml-5">
                                                                            <div className="col-sm-6">
                                                                                <div className="card" style={{ width: '400px' }}>
                                                                                    <img className="card-img-top" src="agency/img/registerGiay.jpg" alt="Card image" />
                                                                                    <div className="card-body">
                                                                                        <a href="agency/img/registerGiay.jpg" download="agency/img/registerGiay.jpg">
                                                                                            <button type="button" className="btn btn-danger button-design"><i className="fa fa-download" aria-hidden="true" /> Dowload File </button>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-6">
                                                                                <div className="card" style={{ width: '400px' }}>
                                                                                    <img className="card-img-top" src="agency/img/register.png" alt="Card image" />
                                                                                    <div className="card-body">
                                                                                        <a href="agency/img/register.png" download="agency/img/register.png">
                                                                                            <button type="button" className="btn btn-danger button-design"><i className="fa fa-download" aria-hidden="true" /> Dowload File </button>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <a href="#" download="Login">
                                                                                <button type="button" className="btn btn-danger button-dowall"><i className="fa fa-download" aria-hidden="true" /> Dowload File All</button>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* single accordian area */}
                                                            <div className="panel single-accordion">
                                                                <h6><a role="button" className aria-expanded="true" aria-controls="collapse3" data-toggle="collapse" data-parent="#accordion" href="#collapse3">3. Quên Mật Khẩu
                <span className="accor-open"><i className="fa fa-plus" aria-hidden="true" /></span>
                                                                    <span className="accor-close"><i className="fa fa-minus" aria-hidden="true" /></span>
                                                                </a></h6>
                                                                <div id="collapse3" className="accordion-content collapse ">
                                                                    <div className="card-body">
                                                                        <div className="row ml-5">
                                                                            <div className="col-sm-6">
                                                                                <div className="card" style={{ width: '400px' }}>
                                                                                    <img className="card-img-top" src="agency/img/forgotGiay.jpg" alt="Card image" />
                                                                                    <div className="card-body">
                                                                                        <a href="agency/img/forgotGiay.jpg" download="agency/img/forgotGiay.jpg">
                                                                                            <button type="button" className="btn btn-danger button-design"><i className="fa fa-download" aria-hidden="true" /> Dowload File </button>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-6">
                                                                                <div className="card" style={{ width: '400px' }}>
                                                                                    <img className="card-img-top" src="agency/img/forgot.png" alt="Card image" />
                                                                                    <div className="card-body">
                                                                                        <a href="agency/img/forgot.png" download="agency/img/forgot.png">
                                                                                            <button type="button" className="btn btn-danger button-design"><i className="fa fa-download" aria-hidden="true" /> Dowload File </button>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <a href="#" download="Login">
                                                                                <button type="button" className="btn btn-danger button-dowall"><i className="fa fa-download" aria-hidden="true" /> Dowload File All</button>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* single accordian area */}
                                                            <div className="panel single-accordion">
                                                                <h6><a role="button" className aria-expanded="true" aria-controls="collapse4" data-toggle="collapse" data-parent="#accordion" href="#collapse4">4. Header
                <span className="accor-open"><i className="fa fa-plus" aria-hidden="true" /></span>
                                                                    <span className="accor-close"><i className="fa fa-minus" aria-hidden="true" /></span>
                                                                </a></h6>
                                                                <div id="collapse4" className="accordion-content collapse ">
                                                                    <div className="card-body">
                                                                        <div className="row ml-5">
                                                                            <div className="col-sm-6">
                                                                                <div className="card" style={{ width: '400px' }}>
                                                                                    <img className="card-img-top" src="agency/img/headerGiay.jpg" alt="Card image" />
                                                                                    <div className="card-body">
                                                                                        <a href="agency/img/headerGiay.jpg" download="agency/img/headerGiay.jpg">
                                                                                            <button type="button" className="btn btn-danger button-design"><i className="fa fa-download" aria-hidden="true" /> Dowload File </button>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-6">
                                                                                <div className="card" style={{ width: '400px' }}>
                                                                                    <img className="card-img-top" src="agency/img/header.png" alt="Card image" />
                                                                                    <div className="card-body">
                                                                                        <a href="agency/img/header.png" download="agency/img/header.png">
                                                                                            <button type="button" className="btn btn-danger button-design"><i className="fa fa-download" aria-hidden="true" /> Dowload File </button>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <a href="#" download="Login">
                                                                                <button type="button" className="btn btn-danger button-dowall"><i className="fa fa-download" aria-hidden="true" /> Dowload File All</button>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* single accordian area */}
                                                            <div className="panel single-accordion">
                                                                <h6><a role="button" className aria-expanded="true" aria-controls="collapse5" data-toggle="collapse" data-parent="#accordion" href="#collapse5">5. Footer
                <span className="accor-open"><i className="fa fa-plus" aria-hidden="true" /></span>
                                                                    <span className="accor-close"><i className="fa fa-minus" aria-hidden="true" /></span>
                                                                </a></h6>
                                                                <div id="collapse5" className="accordion-content collapse ">
                                                                    <div className="card-body">
                                                                        <div className="row ml-5">
                                                                            <div className="col-sm-6">
                                                                                <div className="card" style={{ width: '400px' }}>
                                                                                    <img className="card-img-top" src="agency/img/footerGiay.jpg" alt="Card image" />
                                                                                    <div className="card-body">
                                                                                        <a href="agency/img/footerGiay.jpg" download="agency/img/footerGiay.jpg">
                                                                                            <button type="button" className="btn btn-danger button-design"><i className="fa fa-download" aria-hidden="true" /> Dowload File </button>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-6">
                                                                                <div className="card" style={{ width: '400px' }}>
                                                                                    <img className="card-img-top" src="agency/img/footer.png" alt="Card image" />
                                                                                    <div className="card-body">
                                                                                        <a href="agency/img/footer.png" download="agency/img/footer.png">
                                                                                            <button type="button" className="btn btn-danger button-design"><i className="fa fa-download" aria-hidden="true" /> Dowload File </button>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <a href="#" download="Login">
                                                                                <button type="button" className="btn btn-danger button-dowall"><i className="fa fa-download" aria-hidden="true" /> Dowload File All</button>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* single accordian area */}
                                                            <div className="panel single-accordion">
                                                                <h6><a role="button" className aria-expanded="true" aria-controls="collapse6" data-toggle="collapse" data-parent="#accordion" href="#collapse6">6. Tìm Kiếm Sản Phẩm
                <span className="accor-open"><i className="fa fa-plus" aria-hidden="true" /></span>
                                                                    <span className="accor-close"><i className="fa fa-minus" aria-hidden="true" /></span>
                                                                </a></h6>
                                                                <div id="collapse6" className="accordion-content collapse ">
                                                                    <div className="card-body">
                                                                        <div className="row ml-5">
                                                                            <div className="col-sm-6">
                                                                                <div className="card" style={{ width: '400px' }}>
                                                                                    <img className="card-img-top" src="agency/img/searchGiay.jpg" alt="Card image" />
                                                                                    <div className="card-body">
                                                                                        <a href="agency/img/searchGiay.jpg" download="agency/img/searchGiay.jpg">
                                                                                            <button type="button" className="btn btn-danger button-design"><i className="fa fa-download" aria-hidden="true" /> Dowload File </button>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-6">
                                                                                <div className="card" style={{ width: '400px' }}>
                                                                                    <img className="card-img-top" src="agency/img/searching.png" alt="Card image" />
                                                                                    <div className="card-body">
                                                                                        <a href="agency/img/searching.png" download="agency/img/searching.png">
                                                                                            <button type="button" className="btn btn-danger button-design"><i className="fa fa-download" aria-hidden="true" /> Dowload File </button>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <a href="#" download="Login">
                                                                                <button type="button" className="btn btn-danger button-dowall"><i className="fa fa-download" aria-hidden="true" /> Dowload File All</button>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* single accordian area */}
                                                            <div className="panel single-accordion">
                                                                <h6><a role="button" className aria-expanded="true" aria-controls="collapse7" data-toggle="collapse" data-parent="#accordion" href="#collapse7">7. Giỏ Hàng
                <span className="accor-open"><i className="fa fa-plus" aria-hidden="true" /></span>
                                                                    <span className="accor-close"><i className="fa fa-minus" aria-hidden="true" /></span>
                                                                </a></h6>
                                                                <div id="collapse7" className="accordion-content collapse ">
                                                                    <div className="card-body">
                                                                        <div className="row ml-5">
                                                                            <div className="col-sm-6">
                                                                                <div className="card" style={{ width: '400px' }}>
                                                                                    <img className="card-img-top" src="agency/img/giohangGiay.jpg" alt="Card image" />
                                                                                    <div className="card-body">
                                                                                        <a href="agency/img/giohangGiay.jpg" download="agency/img/giohangGiay.jpg">
                                                                                            <button type="button" className="btn btn-danger button-design"><i className="fa fa-download" aria-hidden="true" /> Dowload File </button>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-6">
                                                                                <div className="card" style={{ width: '400px' }}>
                                                                                    <img className="card-img-top" src="agency/img/giohang.png" alt="Card image" />
                                                                                    <div className="card-body">
                                                                                        <a href="agency/img/giohang.png" download="agency/img/giohang.png">
                                                                                            <button type="button" className="btn btn-danger button-design"><i className="fa fa-download" aria-hidden="true" /> Dowload File </button>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <a href="#" download="Login">
                                                                                <button type="button" className="btn btn-danger button-dowall"><i className="fa fa-download" aria-hidden="true" /> Dowload File All</button>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* single accordian area */}
                                                            <div className="panel single-accordion">
                                                                <h6><a role="button" className aria-expanded="true" aria-controls="collapse8" data-toggle="collapse" data-parent="#accordion" href="#collapse8">8. Thanh Toán
                <span className="accor-open"><i className="fa fa-plus" aria-hidden="true" /></span>
                                                                    <span className="accor-close"><i className="fa fa-minus" aria-hidden="true" /></span>
                                                                </a></h6>
                                                                <div id="collapse8" className="accordion-content collapse ">
                                                                    <div className="card-body">
                                                                        <div className="row ml-5">
                                                                            <div className="col-sm-6">
                                                                                <div className="card" style={{ width: '400px' }}>
                                                                                    <img className="card-img-top" src="agency/img/thanhtoanGiay.jpg" alt="Card image" />
                                                                                    <div className="card-body">
                                                                                        <a href="agency/img/thanhtoanGiay.jpg" download="agency/img/thanhtoanGiay.jpg">
                                                                                            <button type="button" className="btn btn-danger button-design"><i className="fa fa-download" aria-hidden="true" /> Dowload File </button>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-6">
                                                                                <div className="card" style={{ width: '400px' }}>
                                                                                    <img className="card-img-top" src="agency/img/thanhtoan.png" alt="Card image" />
                                                                                    <div className="card-body">
                                                                                        <a href="agency/img/thanhtoan.png" download="agency/img/thanhtoan.png">
                                                                                            <button type="button" className="btn btn-danger button-design"><i className="fa fa-download" aria-hidden="true" /> Dowload File </button>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <a href="#" download="Login">
                                                                                <button type="button" className="btn btn-danger button-dowall"><i className="fa fa-download" aria-hidden="true" /> Dowload File All</button>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* single accordian area */}
                                                            <div className="panel single-accordion">
                                                                <h6><a role="button" className aria-expanded="true" aria-controls="collapse9" data-toggle="collapse" data-parent="#accordion" href="#collapse9">9. Xem Thông Tin Trên Trang Chủ
                <span className="accor-open"><i className="fa fa-plus" aria-hidden="true" /></span>
                                                                    <span className="accor-close"><i className="fa fa-minus" aria-hidden="true" /></span>
                                                                </a></h6>
                                                                <div id="collapse9" className="accordion-content collapse ">
                                                                    <div className="card-body">
                                                                        <div className="row ml-5">
                                                                            <div className="col-sm-6">
                                                                                <div className="card" style={{ width: '400px' }}>
                                                                                    <img className="card-img-top" src="agency/img/trangchuGiay.jpg" alt="Card image" />
                                                                                    <div className="card-body">
                                                                                        <a href="agency/img/trangchuGiay.jpg" download="agency/img/trangchuGiay.jpg">
                                                                                            <button type="button" className="btn btn-danger button-design"><i className="fa fa-download" aria-hidden="true" /> Dowload File </button>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-6">
                                                                                <div className="card" style={{ width: '400px' }}>
                                                                                    <img className="card-img-top" src="agency/img/trangchu.png" alt="Card image" />
                                                                                    <div className="card-body">
                                                                                        <a href="agency/img/trangchu.png" download="agency/img/trangchu.png">
                                                                                            <button type="button" className="btn btn-danger button-design"><i className="fa fa-download" aria-hidden="true" /> Dowload File </button>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <a href="#" download="Login">
                                                                                <button type="button" className="btn btn-danger button-dowall"><i className="fa fa-download" aria-hidden="true" /> Dowload File All</button>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* single accordian area */}
                                                            <div className="panel single-accordion">
                                                                <h6><a role="button" className aria-expanded="true" aria-controls="collapse10" data-toggle="collapse" data-parent="#accordion" href="#collapse10">10. Xem Thông Tin Trang Chi Tiết Từng Sản Phẩm
                <span className="accor-open"><i className="fa fa-plus" aria-hidden="true" /></span>
                                                                    <span className="accor-close"><i className="fa fa-minus" aria-hidden="true" /></span>
                                                                </a></h6>
                                                                <div id="collapse10" className="accordion-content collapse ">
                                                                    <div className="card-body">
                                                                        <div className="row ml-5">
                                                                            <div className="col-sm-6">
                                                                                <div className="card" style={{ width: '400px' }}>
                                                                                    <img className="card-img-top" src="agency/img/chitiettungspGiay.jpg" alt="Card image" />
                                                                                    <div className="card-body">
                                                                                        <a href="agency/img/chitiettungsp.jpg" download="agency/img/chitiettungspGiay.jpg">
                                                                                            <button type="button" className="btn btn-danger button-design"><i className="fa fa-download" aria-hidden="true" /> Dowload File </button>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-6">
                                                                                <div className="card" style={{ width: '400px' }}>
                                                                                    <img className="card-img-top" src="agency/img/chitiettungsp.png" alt="Card image" />
                                                                                    <div className="card-body">
                                                                                        <a href="agency/img/chitiettungsp.png" download="agency/img/chitiettungsp.png">
                                                                                            <button type="button" className="btn btn-danger button-design"><i className="fa fa-download" aria-hidden="true" /> Dowload File </button>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <a href="#" download="Login">
                                                                                <button type="button" className="btn btn-danger button-dowall"><i className="fa fa-download" aria-hidden="true" /> Dowload File All</button>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* single accordian area */}
                                                            <div className="panel single-accordion">
                                                                <h6><a role="button" className aria-expanded="true" aria-controls="collapse11" data-toggle="collapse" data-parent="#accordion" href="#collapse11">11. Trang Liên Hệ
                <span className="accor-open"><i className="fa fa-plus" aria-hidden="true" /></span>
                                                                    <span className="accor-close"><i className="fa fa-minus" aria-hidden="true" /></span>
                                                                </a></h6>
                                                                <div id="collapse11" className="accordion-content collapse ">
                                                                    <div className="card-body">
                                                                        <div className="row ml-5">
                                                                            <div className="col-sm-6">
                                                                                <div className="card" style={{ width: '400px' }}>
                                                                                    <img className="card-img-top" src="agency/img/contactGiay.jpg" alt="Card image" />
                                                                                    <div className="card-body">
                                                                                        <a href="agency/img/contactGiay.jpg" download="agency/img/contactGiay.jpg">
                                                                                            <button type="button" className="btn btn-danger button-design"><i className="fa fa-download" aria-hidden="true" /> Dowload File </button>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm-6">
                                                                                <div className="card" style={{ width: '400px' }}>
                                                                                    <img className="card-img-top" src="agency/img/contact.png" alt="Card image" />
                                                                                    <div className="card-body">
                                                                                        <a href="agency/img/contact.png" download="agency/img/contact.png">
                                                                                            <button type="button" className="btn btn-danger button-design"><i className="fa fa-download" aria-hidden="true" /> Dowload File </button>
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <a href="#" download="Login">
                                                                                <button type="button" className="btn btn-danger button-dowall"><i className="fa fa-download" aria-hidden="true" /> Dowload File All</button>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        
                                                    </div>
                                                </div>



                                            </a><div className="text-center mt-3"><a>
                                            </a>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade " id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                                <div className="content mt-5">
                                                <div className="col-sm-12" style={{fontFamily:'Poppins'}}>
                                                         {/* single accordian area */}
                                                            <div className="panel single-accordion">
                                                            <h6><a role="button" className aria-expanded="true" aria-controls="collapseOne" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">1. Front End
                                                              <span className="accor-open"><i className="fa fa-plus" aria-hidden="true" /></span>
               
                                                                <span className="accor-close"><i className="fa fa-minus" aria-hidden="true" /></span>
                                                                
                                                            </a>
                                                           
                                                            </h6>
                                                           
                                                            <div id="collapseOne" className="accordion-content collapse show">
                                                                 <p><div className="card-body">
                                                                <div className="col-12" style={{fontFamily:'Poppins'}}>
                                                                <div className="row">
                                                                    <div className="col-12 col-md-4 ">
                                                                    <a href="https://t4kshop.tk" target="blank"><p>1. Đăng nhập</p></a>
                                                                    <a href="https://t4kshop.tk" target="blank"><p>2. Đăng kí</p></a>
                                                                    <a href="http://t4kshop.tk" target="blank"><p>3. Quên Mật Khẩu</p></a>
                                                                    <a href="http://t4kshop.tk" target="blank"><p>4. Header</p></a>
                                                                    
                                                                    </div>
                                                                    <div className="col-12 col-md-4 ">
                                                                    <a href="http://t4kshop.tk" target="blank"><p>5. Footer</p></a>
                                                                    <a href="http://t4kshop.tk" target="blank"><p>6. Tìm Kiếm Sản Phẩm</p></a>
                                                                    <a href="http://t4kshop.tk" target="blank"><p>7. Giỏ Hàng</p></a>
                                                                    <a href="http://t4kshop.tk" target="blank"><p>8. Thanh Toán</p></a>
                                                                   
                                                                    </div>
                                                                    <div className="col-12 col-md-4">
                                                                    <a href="http://t4kshop.tk" target="blank"><p>9. Xem Thông Tin Trên Trang Chủ</p></a>
                                                                    <a href="http://t4kshop.tk" target="blank"><p>10. Xem Thông Tin Trang Chi Tiết Từng Sản Phẩm</p></a>
                                                                    <a href="http://t4kshop.tk" target="blank"><p>11. Trang Liên Hệ</p></a>
                                                                    
                                                                    
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </div></p>
                                                            <button type="button" className="btn btn-danger button-imple" style={{display:'block',marginLeft:'auto'}}><a href="http://t4kshop.tk">Go to Project</a> </button>
                                                            </div>
                                                        
                                                        </div>
                                                          {/* single accordian area */}
                                                          <div className="panel single-accordion">
                                                            <h6><a role="button" className aria-expanded="true" aria-controls="collapse2" data-toggle="collapse" data-parent="#accordion" href="#collapse2">2. Back End
                <span className="accor-open"><i className="fa fa-plus" aria-hidden="true" /></span>
                                                                <span className="accor-close"><i className="fa fa-minus" aria-hidden="true" /></span>
                                                            </a></h6>
                                                            <div id="collapse2" className="accordion-content collapse ">
                                                                <p>.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Editable table */}

                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                        {/*================End Content Area =================*/}
                        {/*================Footer Area =================*/}
                    </section>
                </div>

                <Footer />
            </div>
        );
    }
}

export default requirement;