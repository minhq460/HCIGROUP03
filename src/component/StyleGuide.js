import React, { Component } from 'react';
import Header2 from './Header2';
import Footer from './Footer'

class StyleGuide extends Component {
    render() {
        return (
            <div>
                <Header2/>
                <section>
                <div className="container">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="Home">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Style Guide</li>
              </ol>
            </nav>
            </div>
                
                <div className='bd-example bd-example-tabs' style={{fontFamily:'Poppins'}}>
                    <div className='row'>
                        <div className='col-3'>
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{marginLeft:'100px',fontFamily:'Poppins',borderRadius:'7px',border:'1px solid #7004bc'}}>
                                <a className="nav-link active" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-typography" role="tab" aria-controls="v-pills-profile" aria-selected="false">Typography</a>
                                <a className="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-layout" role="tab" aria-controls="v-pills-home" aria-selected="true">Layout</a>
                                {/* <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-illustrations" role="tab" aria-controls="v-pills-profile" aria-selected="false">Illustrations</a> */}
                                <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-colorpalette" role="tab" aria-controls="v-pills-messages" aria-selected="false">Color Palette</a>
                                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-image" role="tab" aria-controls="v-pills-settings" aria-selected="false">Image</a>
                                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Button and Icon</a>
                                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-table" role="tab" aria-controls="v-pills-settings" aria-selected="false">Table and Tab</a>
   
                                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-fileandirectory" role="tab" aria-controls="v-pills-settings" aria-selected="false">File And Directory</a>
                            </div>
                        </div>
                        <div className='col-8' style={{border:'1px solid #7004bc',marginRight:'100px',borderRadius:'7px',padding:'20px',fontFamily:'Poppins',color:'#000'}}>
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-typography" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <div style={{display: 'inline', float: 'left',width:'27.05902083333333em' , margin: '0 0.5882395833333333em'}} >
                                    <h3 style={{color: '#3264f5'}}><b>1. Group Web:</b></h3>
									<h5 style={{color: '#7201BB'}}><b>Typography:</b></h5>
                                    <h2>Header Level 1</h2>
                                    <h3>Header lever 2</h3>
                                    <h5>Header lever 3</h5>
								
                                 
                                    <hr/>
                                    <h5 style={{color: '#7201BB'}}><b>Font:</b></h5>
                                    <p style={{fontFamily:'Poppins'}}>For heading: Poppins</p>
                                    <p style={{fontFamily:'Poppins'}}>For base: Poppins</p>
                                    <p style={{fontFamily:'Roboto'}}>Main font: Roboto</p>
                                    <p style={{fontFamily:'Montserrat'}}>Alt font: Montserrat</p>
                                   
                                    <hr/>
                                    <h5 style={{color: '#7201BB'}}><b>Text:</b></h5>
                                    <p>This is a paragraph.</p></div>
                                    <div style={{display: 'inline', float: 'left',width:'27.05902083333333em' , margin: '0 0.5882395833333333em'}}>
                                    <h3 style={{color: '#3264f5'}}><b>2. Project Web:</b></h3>
                                    <h5 style={{color: '#7201BB'}}><b>Typography:</b></h5>
                                    <h2>Header Level 1</h2>
                                    <h3>Header lever 2</h3>
                                    <h5>Header lever 3</h5>
                                    <hr/>
                                    <h5 style={{color: '#7201BB'}}><b>Font:</b></h5>
                                    <p style={{fontFamily:'Poppins'}}>For heading: Poppins</p>
                                    <p style={{fontFamily:'Poppins'}}>For base: Poppins</p>
                                    <hr/>
                                    <h5 style={{color: '#7201BB'}}><b>Text:</b></h5>
                                    <p>This is a paragraph.</p>
                                   </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-layout" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div style={{display: 'inline', float: 'left',width:'27.05902083333333em' , margin: '0 0.5882395833333333em'}}>
                                <h3 style={{color: '#3264f5'}}><b>1. Group Web:</b></h3>
                                <img src="agency/img/layout/webnhom.jpg"></img></div>
                                <div style={{display: 'inline', float: 'left',width:'27.05902083333333em' , margin: '0 0.5882395833333333em'}}>
                                <h3 style={{color: '#3264f5'}}><b>2. Project Web:</b></h3>
                                <img src="agency/img/layout/b-Sale-Home.png"></img></div>
                                    
                                </div>
                                <div className="tab-pane fade" id="v-pills-illustrations" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                                <div className="tab-pane fade" id="v-pills-colorpalette" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                <div style={{display: 'inline', float: 'left',width:'27.05902083333333em' , margin: '0 0.5882395833333333em'}}>
                                <h3 style={{color: '#3264f5'}}><b>1. Group Web:</b></h3>
                                    <h5 style={{color: '#7201BB'}}><b>Color:</b></h5>
                                    <div >
                                        <div className="color-palette" style={{background:'#7004bc', width:'100px', height:'100px',color:'#fff'}}><p style={{textAlign:'center'}}>#7004bc</p></div>
                                        <div className="color-palette" style={{background:'#3264f5', width:'100px', height:'100px',color:'#fff'}}><p style={{textAlign:'center'}}>#3264f5</p></div>
                                      
                                    </div>
                                </div>
                                <div style={{display: 'inline', float: 'left',width:'27.05902083333333em' , margin: '0 0.5882395833333333em'}}>
                                <h3 style={{color: '#3264f5'}}><b>2. Project Web:</b></h3>
                                <h5 style={{color: '#7201BB'}}><b>Color:</b></h5>
                                <div >

                                        <div className="color-palette" style={{background:'#FFA726', width:'100px', height:'100px',color:'#fff'}}><p style={{textAlign:'center'}}>#FFA726</p></div>
                                        <div className="color-palette" style={{background:'#062f3c ', width:'100px', height:'100px',color:'#fff'}}><p style={{textAlign:'center'}}>#062f3c </p></div>
                                        <div className="color-palette" style={{background:'#00405D ', width:'100px', height:'100px',color:'#fff'}}><p style={{textAlign:'center'}}>#00405D </p></div> &nbsp;
                                        <div className="color-palette" style={{background:'#2B82AD ', width:'100px', height:'100px',color:'#fff'}}><p style={{textAlign:'center'}}>#2B82AD </p></div>
                                      
                                      
                                    </div>

                                </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-table" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                <h5 style={{color: '#7201BB'}}><b>Table:</b></h5>
                               < table border={1} align="center">
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
                                <hr/>
                                <h5 style={{color: '#7201BB'}}><b> Tab1:</b></h5>
                                <div className="col-12 col-lg-6">
                                <div className="accordions mb-100" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div className="panel single-accordion">
                                        <h6><a role="button" className="collapsed" aria-expanded="false" aria-controls="collapseOne" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">tab1
                                            <span className="accor-open"><i className="fa fa-plus" aria-hidden="true" /></span>
                                            <span className="accor-close"><i className="fa fa-minus" aria-hidden="true" /></span>
                                        </a></h6>
                                        <div id="collapseOne" className="accordion-content collapse" style={{}}>
                                        <p>Nam tristique ex vel magna tincidunt, ut porta nisl finibus. Vivamus eu dolor eu quam varius rutrum. Fusce nec justo id sem aliquam fringilla nec non lacus. Suspendisse eget lobortis nisi, ac cursus odio. Vivamus nibh velit, rutrum at ipsum ac, dignissim iaculis ante.</p>
                                        </div>
                                    </div>
                                    <div className="panel single-accordion">
                                        <h6>
                                        <a role="button" className="collapsed" aria-expanded="false" aria-controls="collapseTwo" data-parent="#accordion" data-toggle="collapse" href="#collapseTwo">tab2
                                            <span className="accor-open"><i className="fa fa-plus" aria-hidden="true" /></span>
                                            <span className="accor-close"><i className="fa fa-minus" aria-hidden="true" /></span>
                                        </a>
                                        </h6>
                                        <div id="collapseTwo" className="accordion-content collapse">
                                        <p>Nam tristique ex vel magna tincidunt, ut porta nisl finibus. Vivamus eu dolor eu quam varius rutrum. Fusce nec justo id sem aliquam fringilla nec non lacus. Suspendisse eget lobortis nisi, ac cursus odio. Vivamus nibh velit, rutrum at ipsum ac, dignissim iaculis ante.</p>
                                        </div>
                                    </div>
                                    <div className="panel single-accordion">
                                        <h6>
                                        <a role="button" aria-expanded="false" aria-controls="collapseThree" className="collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapseThree">tab3
                                            <span className="accor-open"><i className="fa fa-plus" aria-hidden="true" /></span>
                                            <span className="accor-close"><i className="fa fa-minus" aria-hidden="true" /></span>
                                        </a>
                                        </h6>
                                        <div id="collapseThree" className="accordion-content collapse">
                                        <p>Nam tristique ex vel magna tincidunt, ut porta nisl finibus. Vivamus eu dolor eu quam varius rutrum. Fusce nec justo id sem aliquam fringilla nec non lacus. Suspendisse eget lobortis nisi, ac cursus odio. Vivamus nibh velit, rutrum at ipsum ac, dignissim iaculis ante.</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <hr/>
                                <h5 style={{color: '#7201BB'}}><b> Tab2:</b></h5>
                                <div className="col-12 col-lg-6">
                                        <div className="oneMusic-tabs-content">
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item">
                                            <a className="nav-link" id="tab--1" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="false">tab1 </a>
                                            </li>
                                            <li className="nav-item">
                                            <a className="nav-link" id="tab--2" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false"> tab2</a>
                                            </li>
                                            <li className="nav-item">
                                            <a className="nav-link active" id="tab--3" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="true"> tab3</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content mb-100" id="myTabContent">
                                            <div className="tab-pane fade" id="tab1" role="tabpanel" aria-labelledby="tab--1">
                                            <div className="oneMusic-tab-content">
                                                <div className="oneMusic-tab-text">
                                                <p>Nam tristique ex vel magna tincidunt, ut porta nisl finibus. Vivamus eu dolor eu quam varius rutrum. Fusce nec justo id sem aliquam fringilla nec non lacus. Suspendisse eget lobortis nisi, ac cursus odio. Vivamus nibh velit, rutrum at ipsum ac, dignissim iaculis ante.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab--2">
                                            <div className="oneMusic-tab-content">
                                                <div className="oneMusic-tab-text">
                                                <p>Nam tristique ex vel magna tincidunt, ut porta nisl finibus. Vivamus eu dolor eu quam varius rutrum. Fusce nec justo id sem aliquam fringilla nec non lacus. Suspendisse eget lobortis nisi, ac cursus odio. Vivamus nibh velit, rutrum at ipsum ac, dignissim iaculis ante.</p>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="tab-pane fade show active" id="tab3" role="tabpanel" aria-labelledby="tab--3">
                                            <div className="oneMusic-tab-content">
                                                <div className="oneMusic-tab-text">
                                                <p>Nam tristique ex vel magna tincidunt, ut porta nisl finibus. Vivamus eu dolor eu quam varius rutrum. Fusce nec justo id sem aliquam fringilla nec non lacus. Suspendisse eget lobortis nisi, ac cursus odio. Vivamus nibh velit, rutrum at ipsum ac, dignissim iaculis ante.</p>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="v-pills-image" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                <div style={{display: 'inline', float: 'left',width:'27.05902083333333em' , margin: '0 0.5882395833333333em'}}>
                                <h3 style={{color: '#3264f5'}}><b>1. Group Web:</b></h3>
                                  <h5 style={{color: '#7201BB'}}><b> Avatar:</b></h5>
                                    <div style={{background:'#D6D6D6', width:'250px', height:'280px'}}>
                                        <p style={{textAlign:'center',paddingTop:'130px',fontSize:'30px'}}>250 x 280</p>
                                    </div> 
                                    <hr></hr>
                                    <h5 style={{color: '#7201BB'}}><b>Slide:</b></h5>
                                    <div style={{background:'#D6D6D6', width:'153px', height:'213px'}}>
                                        <p style={{textAlign:'center',paddingTop:'98px',fontSize:'30px'}}>153 x 213</p>
                                    </div>
                                    <hr></hr>
                                   <h5 style={{color: '#7201BB'}}><b>Group diary:</b></h5>
                                    <div style={{background:'#D6D6D6', width:'309px', height:'309px'}}>
                                        <p style={{textAlign:'center',paddingTop:'98px',fontSize:'30px'}}>153 x 213</p>
                                    </div>
                                    </div>
                                <div style={{display: 'inline', float: 'left',width:'27.05902083333333em' , margin: '0 0.5882395833333333em'}}>
                                <h3 style={{color: '#3264f5'}}><b>2. Project Web:</b></h3>
                                <h5 style={{color: '#7201BB'}}><b> Banner:</b></h5>
                                <img src="agency/img/project/arrivals.jpg"></img>
                                <hr/>
                                <h5 style={{color: '#7201BB'}}><b> Slider:</b></h5>
                                <img src="agency/img/project/s1.jpg"></img>
                                <hr/>
                                <h5 style={{color: '#7201BB'}}><b> Product:</b></h5>
                                <img src="agency/img/project/kids-1.jpg"></img>
                               
                              
                                </div>
                                </div>
                                {/* Button */}
                                <div className="tab-pane fade" id="v-pills-button" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                <div style={{display: 'inline', float: 'left',width:'27.05902083333333em' , margin: '0 0.5882395833333333em'}}>
                                <h3 style={{color: '#3264f5'}}><b>1. Group Web:</b></h3>
                                <h5 style={{color: '#7201BB'}}><b>Button:</b></h5>
                                    <a className="btn btn-large btn-rounded btn-purple btn-hvr-blue d-block mt-4" href="" id="submit_btn" style={{height:'43px',width:'128px'}}>Button
                                        <div className="btn-hvr-setting">
                                            <ul className="btn-hvr-setting-inner">
                                                <li className="btn-hvr-effect" />
                                                <li className="btn-hvr-effect" />
                                                <li className="btn-hvr-effect" />
                                                <li className="btn-hvr-effect" />
                                            </ul>
                                        </div>

                                    </a>
                                   <hr/>
                                    {/* Icon */}
                                    <h5 style={{color: '#7201BB'}}><b>Icon:</b></h5>
                                    <a href="#"><i aria-hidden="true" className="fas fa-code" /></a> &nbsp;
                                    <a href="#"><i aria-hidden="true" className="fab fa-facebook-f" /></a> &nbsp;
                                    <a href="#"><i aria-hidden="true" className="fab fa-youtube" /></a> &nbsp;
                                    <a href="#"><i aria-hidden="true" className="fab fa-google-plus" /></a> &nbsp;
                                    <a href="#"><i aria-hidden="true" className="fab fa-instagram" /></a> &nbsp;
                                    <a href="#"><i aria-hidden="true" className="fab fa-twitter" /></a>
                                </div>
                               
                               <div style={{display: 'inline', float: 'left',width:'27.05902083333333em' , margin: '0 0.5882395833333333em'}}>
                               <h3 style={{color: '#3264f5'}}><b>2. Project Web:</b></h3>
                               <h5 style={{color: '#7201BB'}}><b>Button:</b></h5>
                               <div>
                                   <div className="btn btn-default" style={{background:'orange', color:'white'}}>Add to cart</div>
                               </div>

                               </div>
                               </div>
                                <div className="tab-pane fade" id="v-pills-fileandirectory" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                <div style={{display: 'inline', float: 'left',width:'27.05902083333333em' , margin: '0 0.5882395833333333em'}}>
                                <h3 style={{color: '#3264f5'}}><b>1. Group Web:</b></h3>
                                    <h5 style={{color: '#7201BB'}}><b>Overview:</b></h5>
                                    <img src="agency/img/filedirectory/1.PNG"></img>
                                    <br />
                                    <h5 style={{color: '#7201BB'}}><b>Components:</b></h5>
                                    <img src="agency/img/filedirectory/2.PNG"></img>
                                    </div>
                                    <div style={{display: 'inline', float: 'left',width:'27.05902083333333em' , margin: '0 0.5882395833333333em'}}>
                                    <h3 style={{color: '#3264f5'}}><b>2. Project Web:</b></h3>
                                    <h5 style={{color: '#7201BB'}}><b>Overview:</b></h5>
                                    <img src="agency/img/filedirectory/3.PNG"></img>
                                    <br />
                                    <h5 style={{color: '#7201BB'}}><b>Components:</b></h5>
                                    <img src="agency/img/filedirectory/4.PNG"></img>
                                    </div>
                                   
                                    
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default StyleGuide;

