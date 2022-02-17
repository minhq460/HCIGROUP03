import React, { Component } from 'react'
import Footer from './Footer'
import Header2 from './Header2'
  
export class GroupDiary extends Component {  
    render() {  
        return (  
          <div>
              <Header2/>
              <section className="cube-portfolio1 text-center no-transition" id="portfolio">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                    <div className="breadcurb-area">
                      <div>
                      <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="Home">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Group Diary</li>
                                </ol>
                            </nav>
                      </div>
                    </div>
                      <div className="heading-area mx-570 mb-lg-4 mb-3">
                        <h2 className="title"><span className="alt-color js-rotating">Group Diary</span> </h2>
                      </div>
                    </div>
                  </div>
                  <div className="site-section">
                    <div className="container">
                      <div className="card">
                        <ul className="nav nav-tabs" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#week01" style={{fontSize:'15px'}}><b>Week 01</b></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#week02" style={{fontSize:'15px'}}><b>Week 02</b></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#week03" style={{fontSize:'15px'}}><b>Week 03</b></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#week04" style={{fontSize:'15px'}}><b>Week 04</b></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#week05" style={{fontSize:'15px'}}><b>Week 05</b></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#week06" style={{fontSize:'15px'}}><b>Week 06</b></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#week07" style={{fontSize:'15px'}}><b>Week 07</b></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#week08" style={{fontSize:'15px'}}><b>Week 08</b></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#week09" style={{fontSize:'15px'}}><b>Week 09</b></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#week10" style={{fontSize:'15px'}}><b>Week 10</b></a>
                          </li>
                        </ul>
                        {/* Tab panes */}
                        <div className="tab-content">
                          <div id="week01" className="container tab-pane fade active show">
                              <h3 align="center" style={{marginTop:'10px'}}>WEEK 01<br /></h3><table border={1} align="center">
                              <tbody><tr bgcolor>
                                    <th width="50px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="Số thứ tự"> STT </p></th>
                                    <th width="100px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="Mã sinh viên">Mã SV</p></th>
                                    <th width="200px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Họ Tên</p></th>
                                    <th width="420px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Công việc được giao</p></th>
                                    <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Kết quả</p></th>
                                    <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Mức độ hoàn thành</p></th>												
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">1</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130141</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Nguyễn Hoàng Minh</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>-Tìm hiểu firebase và cách upload firebase<br/>
                                        </p></td>
                                    <td><a href="https://hci2020group03.tk/Technology" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																			
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">2</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130259</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Vũ Hoàng Trung</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>-Tìm hiểu firebase và cách upload firebase</p> </td>
                                    <td><a href="https://hci2020group03.tk/Technology" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">3</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130185</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Châu Vũ Minh Quân </p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>-Tìm hiểu firebase và cách upload firebase</p></td>
                                    <td><a href="https://hci2020group03.tk/Technology" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">4</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130070</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Lê Văn Hào</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>-Tìm hiểu firebase và cách upload firebase<br /></p></td>
                                    <td><a href="https://hci2020group03.tk/Technology" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">5</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130046</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Đào Xuân Đức</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>-Tìm hiểu firebase và cách upload firebase</p></td>
                                    <td><a href="https://hci2020group03.tk/Technology" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                  </tr>
                                </tbody></table>
                            </div>
                          <div id="week02" className="container tab-pane fade">
                              <h3 align="center" style={{marginTop:'10px'}}>WEEK 02<br /></h3><table border={1} align="center">
                                <tbody><tr bgcolor>
                                    <th width="50px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="Số thứ tự"> STT </p></th>
                                    <th width="100px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="Mã sinh viên">Mã SV</p></th>
                                    <th width="200px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Họ Tên</p></th>
                                    <th width="420px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Công việc được giao</p></th>
                                    <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Kết quả</p></th>
                                    <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Mức độ hoàn thành</p></th>												
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">1</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130141</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Nguyễn Hoàng Minh</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Thiết kế logo và thêm hình ảnh sản phẩm cho project nhóm(bán hàng).<br />
                                    - Tìm hiểu và chọn chủ đề web nhóm và tìm template cho website nhóm.
                                        </p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Đang tiếp tục</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">80%</p></td>																			
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">2</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130259</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Vũ Hoàng Trung</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Tìm hiểu và chọn chủ đề web nhóm và tìm template cho project nhóm(bán hàng).<br />
                                      - Tạo About cho web nhóm. 
                                      </p> </td>
                                      <td><a href="https://hci2020group03.tk/About" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">3</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130185</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Châu Vũ Minh Quân </p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Tìm hiểu và chọn chủ đề web nhóm. <br />
                                      - Tìm hiểu và phát triển chức năng "add to cart và checkout".
                                        </p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Đang tiếp tục</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">50%</p></td>																						
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">4</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130070</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Lê Văn Hào</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Tìm hiểu và chọn chủ đề project nhóm.<br/>
                                    -Tìm hiểu và phát triển chức năng "Searching".
                                        </p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Đang tiếp tục</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">20%</p></td>																						
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">5</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130046</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Đào Xuân Đức</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Tìm hiểu và phát triển trang login và register cho project nhóm. <br/>
                                      
                                      </p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Đang tiếp tục</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">50%</p></td>																						
                                  </tr>
                                </tbody></table>
                            </div>
                          <div id="week03" className="container tab-pane fade">
                              <h3 align="center" style={{marginTop:'10px'}}>WEEK 03<br /></h3><table border={1} align="center">
                                <tbody><tr bgcolor>
                                    <th width="50px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="Số thứ tự"> STT </p></th>
                                    <th width="100px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="Mã sinh viên">Mã SV</p></th>
                                    <th width="200px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Họ Tên</p></th>
                                    <th width="420px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Công việc được giao</p></th>
                                    <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Kết quả</p></th>
                                    <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Mức độ hoàn thành</p></th>												
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">1</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130141</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Nguyễn Hoàng Minh</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Thiết kế logo, thêm hình ảnh sản phẩm và chỉnh sửa giao diện cho project nhóm(bán hàng).<br />
                                    -Làm Header, Footer và các mục Catagory của project nhóm(bán hàng)</p></td>
                                    <td><a href="https://t4kshop.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																			
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">2</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130259</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Vũ Hoàng Trung</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Tìm hiểu reactjs và chuyển web nhóm Hào đã hoàn thành giao diện sang reactjs(bị lỗi template khi chuyển xong).<br />
                                    - Tạo tên miền cho web nhóm.
                                    </p> </td>
                                    <td><a href="https://hci2020group03.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">3</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130185</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Châu Vũ Minh Quân </p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Tìm hiểu và phát triển chức năng "add to cart và checkout".<br /></p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Đang tiếp tục</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">70%</p></td>																						
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">4</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130070</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Lê Văn Hào</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Tạo group diary. <br/>
                                    - Chỉnh sửa template web nhóm.
                                    </p></td>
                                    <td><a href="https://hci2020group03.tk/GroupDiary" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">5</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130046</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Đào Xuân Đức</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Tìm hiểu và phát triển trang login và register cho project nhóm.<br />
                                      </p></td>
                                      <td><a href="https://t4kshop.tk/Login" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                  </tr>
                                </tbody></table>
                            </div>
                          <div id="week04" className="container tab-pane fade">
                            <h3 align="center" style={{marginTop:'10px'}}>WEEK 04<br /></h3><table border={1} align="center">
                              <tbody><tr bgcolor>
                                  <th width="50px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="Số thứ tự"> STT </p></th>
                                  <th width="100px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="Mã sinh viên">Mã SV</p></th>
                                  <th width="200px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Họ Tên</p></th>
                                  <th width="420px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Công việc được giao</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Kết quả</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Mức độ hoàn thành</p></th>												
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">1</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130141</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Nguyễn Hoàng Minh</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Tìm hiểu về reactjs và cùng Trung chuyển web nhóm sang reactjs.<br /></p></td>
                                  <td><a href="https://hci2020group03.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																			
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">2</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130259</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Vũ Hoàng Trung</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Chọn lại template nhóm, chỉnh sửa giao diện web nhóm và About (thêm Group Diary của Hào).<br />
                                    - Chuyển đổi web nhóm từ html sang reactjs, update Group Diary và upload lên firebase.</p> </td>
                                    <td><a href="https://hci2020group03.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">3</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130185</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Châu Vũ Minh Quân </p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Tìm hiểu về reactjs và cùng Trung chuyển web nhóm sang reactjs.<br /></p></td>
                                  <td><a href="https://hci2020group03.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">4</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130070</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Lê Văn Hào</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Tìm hiểu về reacjs và chuyển đổi project nhóm(bán hàng) sang reactjs.<br /></p></td>
                                  <td><a href="https://t4kshop.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">5</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130046</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Đào Xuân Đức</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Tìm hiểu về reacjs và chuyển đổi project nhóm(bán hàng) sang reactjs(Cùng với Hào).<br />
                                    </p></td>
                                    <td><a href="https://t4kshop.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                </tr>
                              </tbody></table>
                          </div>
                          <div id="week05" className="container tab-pane fade">
                            <h3 align="center" style={{marginTop:'10px'}}>WEEK 05<br /></h3><table border={1} align="center">
                              <tbody><tr bgcolor>
                                  <th width="50px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="Số thứ tự"> STT </p></th>
                                  <th width="100px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="Mã sinh viên">Mã SV</p></th>
                                  <th width="200px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Họ Tên</p></th>
                                  <th width="420px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Công việc được giao</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Kết quả</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Mức độ hoàn thành</p></th>												
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">1</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130141</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Nguyễn Hoàng Minh</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Làm nội dung cho trang "About Us" và "Contact" cho project nhóm.<br /></p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Đang tiến hành</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">50%</p></td>																			
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">2</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130259</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Vũ Hoàng Trung</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Làm trang "Home" cho project nhóm. <br/>- Làm animation cho trang chủ.</p> </td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Đang tiến hành</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">50%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">3</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130185</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Châu Vũ Minh Quân </p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Làm trang "Acessories" cho project nhóm.<br /></p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Đang tiến hành</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">50%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">4</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130070</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Lê Văn Hào</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Làm trang "Toys" cho project nhóm.<br /></p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Đang tiến hành</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">50%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">5</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130046</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Đào Xuân Đức</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Làm trang "Clothes" cho project nhóm.<br />
                                    </p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Đang tiến hành</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">50%</p></td>																						
                                </tr>
                              </tbody></table>
                          </div>
                          <div id="week06" className="container tab-pane fade">
                            <h3 align="center" style={{marginTop:'10px'}}>WEEK 06<br /></h3><table border={1} align="center">
                              <tbody><tr bgcolor>
                                  <th width="50px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="Số thứ tự"> STT </p></th>
                                  <th width="100px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="Mã sinh viên">Mã SV</p></th>
                                  <th width="200px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Họ Tên</p></th>
                                  <th width="420px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Công việc được giao</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Kết quả</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Mức độ hoàn thành</p></th>												
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">1</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130141</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Nguyễn Hoàng Minh</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Làm nội dung cho trang "About Us" và "Contact" cho project nhóm.<br /></p></td>
                                  <td><a href="https://t4kshop.tk/About" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link About Us</p></a>
                                  <a href="https://t4kshop.tk/Contact" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link Contact</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																			
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">2</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130259</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Vũ Hoàng Trung</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Làm trang "Home" cho project nhóm. <br/>- Làm animation cho trang chủ.</p> </td>
                                    <td><a href="https://t4kshop.tk/Home" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">3</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130185</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Châu Vũ Minh Quân </p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Làm trang "Acessories" cho project nhóm.<br /></p></td>
                                  <td><a href="https://t4kshop.tk/Accessories" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">4</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130070</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Lê Văn Hào</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Làm trang "Toys" cho project nhóm.<br /></p></td>
                                  <td><a href="https://t4kshop.tk/Toys" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">5</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130046</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Đào Xuân Đức</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Làm trang "Clothes" cho project nhóm.<br />
                                    </p></td>
                                    <td><a href="https://t4kshop.tk/Clothes" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                </tr>
                              </tbody></table>
                          </div>
                          <div id="week07" className="container tab-pane fade">
                            <h3 align="center" style={{marginTop:'10px'}}>WEEK 07<br /></h3><table border={1} align="center">
                              <tbody><tr bgcolor>
                                  <th width="50px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="Số thứ tự"> STT </p></th>
                                  <th width="100px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="Mã sinh viên">Mã SV</p></th>
                                  <th width="200px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Họ Tên</p></th>
                                  <th width="420px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Công việc được giao</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Kết quả</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Mức độ hoàn thành</p></th>												
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">1</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130141</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Nguyễn Hoàng Minh</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Làm phần Implement cho trang "Project" của web nhóm .<br /></p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Đang tiến hành</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">50%</p></td>																			
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">2</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130259</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Vũ Hoàng Trung</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Làm trang "Style Guide" của web nhóm .</p> </td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Đang tiến hành</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">50%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">3</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130185</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Châu Vũ Minh Quân </p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Làm phần Requirement cho trang "Project" của web nhóm .<br /></p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Đang tiến hành</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">50%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">4</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130070</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Lê Văn Hào</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Làm phần Design cho trang "Project" của web nhóm .<br /></p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Đang tiến hành</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">50%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">5</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130046</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Đào Xuân Đức</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Làm phần Design cho trang "Project" của web nhóm . <br />
                                    </p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Đang tiến hành</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">50%</p></td>																						
                                </tr>
                              </tbody></table>
                          </div>
                          <div id="week08" className="container tab-pane fade">
                            <h3 align="center" style={{marginTop:'10px'}}>WEEK 08<br /></h3><table border={1} align="center">
                              <tbody><tr bgcolor>
                                  <th width="50px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="Số thứ tự"> STT </p></th>
                                  <th width="100px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="Mã sinh viên">Mã SV</p></th>
                                  <th width="200px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Họ Tên</p></th>
                                  <th width="420px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Công việc được giao</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Kết quả</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Mức độ hoàn thành</p></th>												
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">1</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130141</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Nguyễn Hoàng Minh</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Làm phần Implement cho trang "Project" của web nhóm .<br />
                                  - Làm trang "Style Guide" của web nhóm .</p></td>
                                  <td><a href="https://hci2020group03.tk/Project" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><a href="https://hci2020group03.tk/StyleGuide" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																			
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">2</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130259</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Vũ Hoàng Trung</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Làm trang "Style Guide" của web nhóm .</p> </td>
                                    <td><a href="https://hci2020group03.tk/StyleGuide" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">3</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130185</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Châu Vũ Minh Quân </p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Làm phần Requirement cho trang "Project" của web nhóm .<br /></p></td>
                                  <td><a href="https://hci2020group03.tk/Project" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">4</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130070</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Lê Văn Hào</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Làm phần Design cho trang "Project" của web nhóm .<br /></p></td>
                                  <td><a href="https://hci2020group03.tk/Project" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">5</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130046</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Đào Xuân Đức</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Làm phần Design cho trang "Project" của web nhóm . <br />
                                    </p></td>
                                    <td><a href="https://hci2020group03.tk/Project" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                </tr>
                              </tbody></table>
                          </div>
                          <div id="week09" className="container tab-pane fade">
                            <h3 align="center" style={{marginTop:'10px'}}>WEEK 09<br /></h3><table border={1} align="center">
                              <tbody><tr bgcolor>
                                  <th width="50px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="Số thứ tự"> STT </p></th>
                                  <th width="100px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="Mã sinh viên">Mã SV</p></th>
                                  <th width="200px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Họ Tên</p></th>
                                  <th width="420px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Công việc được giao</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Kết quả</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Mức độ hoàn thành</p></th>												
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">1</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130141</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Nguyễn Hoàng Minh</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Hoàn thiện web nhóm và web project<br />
                                  - Làm lại chức năng Add to cart</p></td>
                                  <td><a href="https://t4kshop.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">20%</p></td>																			
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">2</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130259</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Vũ Hoàng Trung</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- - Hoàn thiện web nhóm và web project<br />
                                  - Làm lại chức năng Add to cart</p> </td>
                                    <td><a href="https://t4kshop.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">20%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">3</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130185</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Châu Vũ Minh Quân </p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- - Hoàn thiện web nhóm và web project<br />
                                  - Làm lại chức năng Add to cart</p></td>
                                  <td><a href="https://t4kshop.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">20%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">4</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130070</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Lê Văn Hào</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- - Hoàn thiện web nhóm và web project<br />
                                  - Làm lại chức năng Searching va Filter</p></td>
                                  <td><a href="https://t4kshop.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">20%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">5</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130046</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Đào Xuân Đức</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Hoàn thiện web nhóm và web project<br />
                                  - Làm lại chức năng Searching và Filter
                                    </p></td>
                                    <td><a href="https://t4kshop.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">20%</p></td>																						
                                </tr>
                              </tbody></table>
                          </div>
                          <div id="week10" className="container tab-pane fade">
                            <h3 align="center" style={{marginTop:'10px'}}>WEEK 10<br /></h3><table border={1} align="center">
                              <tbody><tr bgcolor>
                                  <th width="50px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="Số thứ tự"> STT </p></th>
                                  <th width="100px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="Mã sinh viên">Mã SV</p></th>
                                  <th width="200px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Họ Tên</p></th>
                                  <th width="420px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Công việc được giao</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Kết quả</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Mức độ hoàn thành</p></th>												
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">1</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130141</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Nguyễn Hoàng Minh</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Hoàn thiện web nhóm và web project<br />
                                  - Làm lại chức năng Add to cart<br/>
                                  - Làm trang "Result" cho web nhóm.</p></td>
                                  <td><a href="https://t4kshop.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a>
                                  <a href="https://hci2020group03.tk/Result" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link Result</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">60%</p></td>																			
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">2</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130259</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Vũ Hoàng Trung</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- - Hoàn thiện web nhóm và web project<br />
                                  - Làm lại chức năng Add to cart</p> </td>
                                    <td><a href="https://t4kshop.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">60%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">3</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130185</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Châu Vũ Minh Quân </p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- - Hoàn thiện web nhóm và web project<br />
                                  - Làm lại chức năng Add to cart</p></td>
                                  <td><a href="https://t4kshop.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">60%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">4</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130070</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Lê Văn Hào</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- - Hoàn thiện web nhóm và web project<br />
                                  - Làm lại chức năng Searching va Filter
                                  <br/>
                                  - Làm trang "Result" cho web nhóm.</p></td>
                                  <td><a href="https://t4kshop.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a>
                                  <a href="https://hci2020group03.tk/Result" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link Result</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">60%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">5</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130046</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Đào Xuân Đức</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Hoàn thiện web nhóm và web project<br />
                                  - Làm lại chức năng Searching và Filter
                                    </p></td>
                                    <td><a href="https://t4kshop.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">60%</p></td>																						
                                </tr>
                              </tbody></table>
                          </div>
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="row wow fadeIn">
              <div className="col-md-12">
                <div className="cbp-l-filters-button" id="js-filters-mosaic-flat">
                  <div className="cbp-filter-item-active cbp-filter-item" data-filter="*">All</div>
                  <span className="text-blue">/</span>
                  <div className="cbp-filter-item" data-filter=".week1">Week1</div>
                  <span className="text-blue"> / </span>
                  <div className="cbp-filter-item" data-filter=".week2">Week2</div>
                  <span className="text-blue"> / </span>
                  <div className="cbp-filter-item" data-filter=".week3">Week3</div>
                  <span className="text-blue"> / </span>
                  <div className="cbp-filter-item" data-filter=".week4">Week4</div>
                  <span className="text-blue"> / </span>
                  <div className="cbp-filter-item" data-filter=".week5">Week5</div>
                  <span className="text-blue"> / </span>
                  <div className="cbp-filter-item" data-filter=".week6">Week6</div>
                  <span className="text-blue"> / </span>
                  <div className="cbp-filter-item" data-filter=".week7">Week7</div>
                  <span className="text-blue"> / </span>
                  <div className="cbp-filter-item" data-filter=".week8">Week8</div>
                  <span className="text-blue"> / </span>
                  <div className="cbp-filter-item" data-filter=".week9">Week9</div>
                  <span className="text-blue"> / </span>
                  <div className="cbp-filter-item" data-filter=".week10">Week10</div>
                </div>
               
                <div className="cbp cbp-l-grid-mosaic-flat" id="js-grid-mosaic-flat">
                  <div className="cbp-item week1">
                    <a className="cbp-caption cbp-lightbox" href="groupphotos\week1.jpg">
                      <div className="cbp-caption-defaultWrap">
                        <img alt="port-1" src="groupphotos\week1.jpg" style={{width:'35em',height:'auto'}}/>
                      </div>
                      <div className="cbp-caption-activeWrap" />
                      <div className="cbp-l-caption-alignCenter center-block">
                        <div className="cbp-l-caption-body">
                          <div className="plus" />
                          <h5 className="text-white mb-1">Latest Work</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cbp-item week2">
                    <a className="cbp-caption cbp-lightbox" href="groupphotos\week2.jpg">
                      <div className="cbp-caption-defaultWrap">
                        <img alt="port-2" src="groupphotos\week2.jpg" style={{width:'35em',height:'auto'}}/>
                      </div>
                      <div className="cbp-caption-activeWrap" />
                      <div className="cbp-l-caption-alignCenter center-block">
                        <div className="cbp-l-caption-body">
                          <div className="plus" />
                          <h5 className="text-white mb-1">Latest Work</h5>
                          <p className="text-white">See Our Amazing Work</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* <div className="cbp-item week2">
                    <a className="cbp-caption cbp-lightbox" href="agency\img\week2-2.jpg">
                      <div className="cbp-caption-defaultWrap">
                        <img alt="port-2" src="agency\img\week2-2.jpg" style={{width:'35em',height:'auto'}}/>
                      </div>
                      <div className="cbp-caption-activeWrap" />
                      <div className="cbp-l-caption-alignCenter center-block">
                        <div className="cbp-l-caption-body">
                          <div className="plus" />
                          <h5 className="text-white mb-1">Latest Work</h5>
                          <p className="text-white">See Our Amazing Work</p>
                        </div>
                      </div>
                    </a>
                  </div> */}
                  <div className="cbp-item week3">
                    <a className="cbp-caption cbp-lightbox" href="groupphotos\week3.jpg">
                      <div className="cbp-caption-defaultWrap">
                        <img alt="port-4" src="groupphotos\week3.jpg" style={{width:'35em',height:'auto'}}/>
                      </div>
                      <div className="cbp-caption-activeWrap" />
                      <div className="cbp-l-caption-alignCenter center-block">
                        <div className="cbp-l-caption-body">
                          <div className="plus" />
                          <h5 className="text-white mb-1">Latest Work</h5>
                          <p className="text-white">See Our Amazing Work</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cbp-item  week4">
                    <a className="cbp-caption cbp-lightbox" href="groupphotos\week4.jpg">
                      <div className="cbp-caption-defaultWrap">
                        <img alt="port-3" src="groupphotos\week4.jpg" style={{width:'35em',height:'auto'}}/>
                      </div>
                      <div className="cbp-caption-activeWrap" />
                      <div className="cbp-l-caption-alignCenter center-block">
                        <div className="cbp-l-caption-body">
                          <div className="plus" />
                          <h5 className="text-white mb-1">Latest Work</h5>
                          <p className="text-white">See Our Amazing Work</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cbp-item week5">
                    <a className="cbp-caption cbp-lightbox" href="groupphotos\week5.jpg">
                      <div className="cbp-caption-defaultWrap">
                        <img alt="port-5" src="groupphotos\week5.jpg" style={{width:'35em',height:'auto'}}/>
                      </div>
                      <div className="cbp-caption-activeWrap" />
                      <div className="cbp-l-caption-alignCenter center-block">
                        <div className="cbp-l-caption-body">
                          <div className="plus" />
                          <h5 className="text-white mb-1">Latest Work</h5>
                          <p className="text-white">See Our Amazing Work</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cbp-item week6 ">
                    <a className="cbp-caption cbp-lightbox" href="groupphotos\week6.jpg">
                      <div className="cbp-caption-defaultWrap">
                        <img alt="port-6" src="groupphotos\week6.jpg" style={{width:'35em',height:'auto'}}/>
                      </div>
                      <div className="cbp-caption-activeWrap" />
                      <div className="cbp-l-caption-alignCenter center-block">
                        <div className="cbp-l-caption-body">
                          <div className="plus" />
                          <h5 className="text-white mb-1">Latest Work</h5>
                          <p className="text-white">See Our Amazing Work</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cbp-item week7">
                    <a className="cbp-caption cbp-lightbox" href="groupphotos\week7.jpg">
                      <div className="cbp-caption-defaultWrap">
                        <img alt="port-7" src="groupphotos\week7.jpg" style={{width:'35em',height:'auto'}}/>
                      </div>
                      <div className="cbp-caption-activeWrap" />
                      <div className="cbp-l-caption-alignCenter center-block">
                        <div className="cbp-l-caption-body">
                          <div className="plus" />
                          <h5 className="text-white mb-1">Latest Work</h5>
                          <p className="text-white">See Our Amazing Work</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cbp-item week8">
                    <a className="cbp-caption cbp-lightbox" href="groupphotos\week8.jpg">
                      <div className="cbp-caption-defaultWrap">
                        <img alt="port-8" src="groupphotos\week8.jpg" style={{width:'35em',height:'auto'}} />
                      </div>
                      <div className="cbp-caption-activeWrap" />
                      <div className="cbp-l-caption-alignCenter center-block">
                        <div className="cbp-l-caption-body">
                          <div className="plus" />
                          <h5 className="text-white mb-1">Latest Work</h5>
                          <p className="text-white">See Our Amazing Work</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cbp-item week9">
                    <a className="cbp-caption cbp-lightbox" href="groupphotos\week9.jpg">
                      <div className="cbp-caption-defaultWrap">
                        <img alt="port-8" src="groupphotos\week9.jpg" style={{width:'35em',height:'auto'}}/>
                      </div>
                      <div className="cbp-caption-activeWrap" />
                      <div className="cbp-l-caption-alignCenter center-block">
                        <div className="cbp-l-caption-body">
                          <div className="plus" />
                          <h5 className="text-white mb-1">Latest Work</h5>
                          <p className="text-white">See Our Amazing Work</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="cbp-item week10">
                    <a className="cbp-caption cbp-lightbox" href="groupphotos\week10.jpg">
                      <div className="cbp-caption-defaultWrap">
                        <img alt="port-8" src="groupphotos\week10.jpg" style={{width:'35em',height:'auto'}}/>
                      </div>
                      <div className="cbp-caption-activeWrap" />
                      <div className="cbp-l-caption-alignCenter center-block">
                        <div className="cbp-l-caption-body">
                          <div className="plus" />
                          <h5 className="text-white mb-1">Latest Work</h5>
                          <p className="text-white">See Our Amazing Work</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
                </div>
              </section>
              <Footer/>
          </div>  
        )  
    }  
}  
  
export default GroupDiary