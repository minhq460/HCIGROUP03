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
                                    <th width="50px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="S??? th??? t???"> STT </p></th>
                                    <th width="100px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="M?? sinh vi??n">Ma?? SV</p></th>
                                    <th width="200px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Ho?? T??n</p></th>
                                    <th width="420px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">C??ng vi????c ????????c giao</p></th>
                                    <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">K????t qua??</p></th>
                                    <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">M???c ????? ho??n th??nh</p></th>												
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">1</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130141</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Nguy???n Ho??ng Minh</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>-T??m hi???u firebase v?? c??ch upload firebase<br/>
                                        </p></td>
                                    <td><a href="https://hci2020group03.tk/Technology" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																			
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">2</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130259</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>V?? Ho??ng Trung</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>-T??m hi???u firebase v?? c??ch upload firebase</p> </td>
                                    <td><a href="https://hci2020group03.tk/Technology" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">3</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130185</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Ch??u V?? Minh Qu??n </p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>-T??m hi???u firebase v?? c??ch upload firebase</p></td>
                                    <td><a href="https://hci2020group03.tk/Technology" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">4</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130070</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>L?? V??n H??o</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>-T??m hi???u firebase v?? c??ch upload firebase<br /></p></td>
                                    <td><a href="https://hci2020group03.tk/Technology" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">5</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130046</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>????o Xu??n ?????c</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>-T??m hi???u firebase v?? c??ch upload firebase</p></td>
                                    <td><a href="https://hci2020group03.tk/Technology" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                  </tr>
                                </tbody></table>
                            </div>
                          <div id="week02" className="container tab-pane fade">
                              <h3 align="center" style={{marginTop:'10px'}}>WEEK 02<br /></h3><table border={1} align="center">
                                <tbody><tr bgcolor>
                                    <th width="50px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="S??? th??? t???"> STT </p></th>
                                    <th width="100px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="M?? sinh vi??n">Ma?? SV</p></th>
                                    <th width="200px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Ho?? T??n</p></th>
                                    <th width="420px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">C??ng vi????c ????????c giao</p></th>
                                    <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">K????t qua??</p></th>
                                    <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">M???c ????? ho??n th??nh</p></th>												
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">1</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130141</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Nguy???n Ho??ng Minh</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Thi???t k??? logo v?? th??m h??nh ???nh s???n ph???m cho project nh??m(b??n h??ng).<br />
                                    - Ti??m hie????u va?? ch???n ch??? ????? web nh??m v?? t??m template cho website nh??m.
                                        </p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">??ang ti???p t???c</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">80%</p></td>																			
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">2</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130259</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>V?? Ho??ng Trung</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Ti??m hie????u va?? ch???n ch??? ????? web nh??m v?? t??m template cho project nh??m(b??n h??ng).<br />
                                      - T???o About cho web nh??m. 
                                      </p> </td>
                                      <td><a href="https://hci2020group03.tk/About" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">3</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130185</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Ch??u V?? Minh Qu??n </p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Ti??m hie????u va?? ch???n ch??? ????? web nh??m. <br />
                                      - T??m hi???u v?? ph??t tri???n ch???c n??ng "add to cart v?? checkout".
                                        </p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">??ang ti???p t???c</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">50%</p></td>																						
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">4</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130070</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>L?? V??n H??o</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Ti??m hie????u va?? cho??n chu?? ??e???? project nho??m.<br/>
                                    -T??m hi???u v?? ph??t tri???n ch???c n??ng "Searching".
                                        </p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">??ang ti???p t???c</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">20%</p></td>																						
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">5</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130046</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>????o Xu??n ?????c</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- T??m hi???u v?? ph??t tri???n trang login v?? register cho project nh??m. <br/>
                                      
                                      </p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">??ang ti???p t???c</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">50%</p></td>																						
                                  </tr>
                                </tbody></table>
                            </div>
                          <div id="week03" className="container tab-pane fade">
                              <h3 align="center" style={{marginTop:'10px'}}>WEEK 03<br /></h3><table border={1} align="center">
                                <tbody><tr bgcolor>
                                    <th width="50px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="S??? th??? t???"> STT </p></th>
                                    <th width="100px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="M?? sinh vi??n">Ma?? SV</p></th>
                                    <th width="200px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Ho?? T??n</p></th>
                                    <th width="420px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">C??ng vi????c ????????c giao</p></th>
                                    <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">K????t qua??</p></th>
                                    <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">M???c ????? ho??n th??nh</p></th>												
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">1</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130141</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Nguy???n Ho??ng Minh</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Thi???t k??? logo, th??m h??nh ???nh s???n ph???m v?? ch???nh s???a giao di???n cho project nh??m(b??n h??ng).<br />
                                    -L??m Header, Footer v?? c??c m???c Catagory c???a project nh??m(b??n h??ng)</p></td>
                                    <td><a href="https://t4kshop.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																			
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">2</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130259</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>V?? Ho??ng Trung</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- T??m hi???u reactjs v?? chuy???n web nh??m H??o ???? ho??n th??nh giao di???n sang reactjs(b??? l???i template khi chuy???n xong).<br />
                                    - T???o t??n mi???n cho web nh??m.
                                    </p> </td>
                                    <td><a href="https://hci2020group03.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">3</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130185</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Ch??u V?? Minh Qu??n </p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- T??m hi???u v?? ph??t tri???n ch???c n??ng "add to cart v?? checkout".<br /></p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">??ang ti???p t???c</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">70%</p></td>																						
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">4</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130070</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>L?? V??n H??o</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- T???o group diary. <br/>
                                    - Ch???nh s???a template web nh??m.
                                    </p></td>
                                    <td><a href="https://hci2020group03.tk/GroupDiary" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                  </tr>
                                  <tr>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">5</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130046</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>????o Xu??n ?????c</p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- T??m hi???u v?? ph??t tri???n trang login v?? register cho project nh??m.<br />
                                      </p></td>
                                      <td><a href="https://t4kshop.tk/Login" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                  </tr>
                                </tbody></table>
                            </div>
                          <div id="week04" className="container tab-pane fade">
                            <h3 align="center" style={{marginTop:'10px'}}>WEEK 04<br /></h3><table border={1} align="center">
                              <tbody><tr bgcolor>
                                  <th width="50px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="S??? th??? t???"> STT </p></th>
                                  <th width="100px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="M?? sinh vi??n">Ma?? SV</p></th>
                                  <th width="200px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Ho?? T??n</p></th>
                                  <th width="420px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">C??ng vi????c ????????c giao</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">K????t qua??</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">M???c ????? ho??n th??nh</p></th>												
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">1</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130141</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Nguy???n Ho??ng Minh</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Ti??m hie????u ve???? reactjs va?? c??ng Trung chuy???n web nh??m sang reactjs.<br /></p></td>
                                  <td><a href="https://hci2020group03.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																			
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">2</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130259</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>V?? Ho??ng Trung</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Ch???n l???i template nh??m, ch???nh s???a giao di???n web nh??m v?? About (th??m Group Diary c???a H??o).<br />
                                    - Chuy???n ?????i web nh??m t??? html sang reactjs, update Group Diary v?? upload l??n firebase.</p> </td>
                                    <td><a href="https://hci2020group03.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">3</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130185</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Ch??u V?? Minh Qu??n </p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Ti??m hie????u ve???? reactjs va?? c??ng Trung chuy???n web nh??m sang reactjs.<br /></p></td>
                                  <td><a href="https://hci2020group03.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">4</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130070</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>L?? V??n H??o</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- T??m hi???u v??? reacjs v?? chuy???n ?????i project nh??m(b??n h??ng) sang reactjs.<br /></p></td>
                                  <td><a href="https://t4kshop.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">5</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130046</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>????o Xu??n ?????c</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- T??m hi???u v??? reacjs v?? chuy???n ?????i project nh??m(b??n h??ng) sang reactjs(C??ng v???i H??o).<br />
                                    </p></td>
                                    <td><a href="https://t4kshop.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                </tr>
                              </tbody></table>
                          </div>
                          <div id="week05" className="container tab-pane fade">
                            <h3 align="center" style={{marginTop:'10px'}}>WEEK 05<br /></h3><table border={1} align="center">
                              <tbody><tr bgcolor>
                                  <th width="50px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="S??? th??? t???"> STT </p></th>
                                  <th width="100px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="M?? sinh vi??n">Ma?? SV</p></th>
                                  <th width="200px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Ho?? T??n</p></th>
                                  <th width="420px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">C??ng vi????c ????????c giao</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">K????t qua??</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">M???c ????? ho??n th??nh</p></th>												
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">1</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130141</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Nguy???n Ho??ng Minh</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- L??m n???i dung cho trang "About Us" v?? "Contact" cho project nh??m.<br /></p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>??ang ti???n h??nh</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">50%</p></td>																			
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">2</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130259</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>V?? Ho??ng Trung</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- L??m trang "Home" cho project nh??m. <br/>- L??m animation cho trang ch???.</p> </td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>??ang ti???n h??nh</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">50%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">3</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130185</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Ch??u V?? Minh Qu??n </p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- L??m trang "Acessories" cho project nh??m.<br /></p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>??ang ti???n h??nh</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">50%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">4</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130070</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>L?? V??n H??o</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- L??m trang "Toys" cho project nh??m.<br /></p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>??ang ti???n h??nh</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">50%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">5</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130046</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>????o Xu??n ?????c</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- L??m trang "Clothes" cho project nh??m.<br />
                                    </p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>??ang ti???n h??nh</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">50%</p></td>																						
                                </tr>
                              </tbody></table>
                          </div>
                          <div id="week06" className="container tab-pane fade">
                            <h3 align="center" style={{marginTop:'10px'}}>WEEK 06<br /></h3><table border={1} align="center">
                              <tbody><tr bgcolor>
                                  <th width="50px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="S??? th??? t???"> STT </p></th>
                                  <th width="100px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="M?? sinh vi??n">Ma?? SV</p></th>
                                  <th width="200px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Ho?? T??n</p></th>
                                  <th width="420px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">C??ng vi????c ????????c giao</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">K????t qua??</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">M???c ????? ho??n th??nh</p></th>												
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">1</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130141</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Nguy???n Ho??ng Minh</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- L??m n???i dung cho trang "About Us" v?? "Contact" cho project nh??m.<br /></p></td>
                                  <td><a href="https://t4kshop.tk/About" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link About Us</p></a>
                                  <a href="https://t4kshop.tk/Contact" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link Contact</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																			
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">2</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130259</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>V?? Ho??ng Trung</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- L??m trang "Home" cho project nh??m. <br/>- L??m animation cho trang ch???.</p> </td>
                                    <td><a href="https://t4kshop.tk/Home" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">3</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130185</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Ch??u V?? Minh Qu??n </p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- L??m trang "Acessories" cho project nh??m.<br /></p></td>
                                  <td><a href="https://t4kshop.tk/Accessories" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">4</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130070</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>L?? V??n H??o</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- L??m trang "Toys" cho project nh??m.<br /></p></td>
                                  <td><a href="https://t4kshop.tk/Toys" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">5</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130046</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>????o Xu??n ?????c</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- L??m trang "Clothes" cho project nh??m.<br />
                                    </p></td>
                                    <td><a href="https://t4kshop.tk/Clothes" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                </tr>
                              </tbody></table>
                          </div>
                          <div id="week07" className="container tab-pane fade">
                            <h3 align="center" style={{marginTop:'10px'}}>WEEK 07<br /></h3><table border={1} align="center">
                              <tbody><tr bgcolor>
                                  <th width="50px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="S??? th??? t???"> STT </p></th>
                                  <th width="100px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="M?? sinh vi??n">Ma?? SV</p></th>
                                  <th width="200px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Ho?? T??n</p></th>
                                  <th width="420px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">C??ng vi????c ????????c giao</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">K????t qua??</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">M???c ????? ho??n th??nh</p></th>												
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">1</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130141</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Nguy???n Ho??ng Minh</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- L??m ph???n Implement cho trang "Project" c???a web nh??m .<br /></p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>??ang ti???n h??nh</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">50%</p></td>																			
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">2</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130259</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>V?? Ho??ng Trung</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- L??m trang "Style Guide" c???a web nh??m .</p> </td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>??ang ti???n h??nh</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">50%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">3</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130185</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Ch??u V?? Minh Qu??n </p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- L??m ph???n Requirement cho trang "Project" c???a web nh??m .<br /></p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>??ang ti???n h??nh</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">50%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">4</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130070</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>L?? V??n H??o</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- L??m ph???n Design cho trang "Project" c???a web nh??m .<br /></p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>??ang ti???n h??nh</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">50%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">5</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130046</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>????o Xu??n ?????c</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- L??m ph???n Design cho trang "Project" c???a web nh??m . <br />
                                    </p></td>
                                    <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>??ang ti???n h??nh</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">50%</p></td>																						
                                </tr>
                              </tbody></table>
                          </div>
                          <div id="week08" className="container tab-pane fade">
                            <h3 align="center" style={{marginTop:'10px'}}>WEEK 08<br /></h3><table border={1} align="center">
                              <tbody><tr bgcolor>
                                  <th width="50px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="S??? th??? t???"> STT </p></th>
                                  <th width="100px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="M?? sinh vi??n">Ma?? SV</p></th>
                                  <th width="200px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Ho?? T??n</p></th>
                                  <th width="420px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">C??ng vi????c ????????c giao</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">K????t qua??</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">M???c ????? ho??n th??nh</p></th>												
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">1</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130141</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Nguy???n Ho??ng Minh</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- L??m ph???n Implement cho trang "Project" c???a web nh??m .<br />
                                  - L??m trang "Style Guide" c???a web nh??m .</p></td>
                                  <td><a href="https://hci2020group03.tk/Project" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><a href="https://hci2020group03.tk/StyleGuide" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																			
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">2</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130259</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>V?? Ho??ng Trung</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- L??m trang "Style Guide" c???a web nh??m .</p> </td>
                                    <td><a href="https://hci2020group03.tk/StyleGuide" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">3</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130185</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Ch??u V?? Minh Qu??n </p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- L??m ph???n Requirement cho trang "Project" c???a web nh??m .<br /></p></td>
                                  <td><a href="https://hci2020group03.tk/Project" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">4</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130070</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>L?? V??n H??o</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- L??m ph???n Design cho trang "Project" c???a web nh??m .<br /></p></td>
                                  <td><a href="https://hci2020group03.tk/Project" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">5</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130046</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>????o Xu??n ?????c</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- L??m ph???n Design cho trang "Project" c???a web nh??m . <br />
                                    </p></td>
                                    <td><a href="https://hci2020group03.tk/Project" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">100%</p></td>																						
                                </tr>
                              </tbody></table>
                          </div>
                          <div id="week09" className="container tab-pane fade">
                            <h3 align="center" style={{marginTop:'10px'}}>WEEK 09<br /></h3><table border={1} align="center">
                              <tbody><tr bgcolor>
                                  <th width="50px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="S??? th??? t???"> STT </p></th>
                                  <th width="100px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="M?? sinh vi??n">Ma?? SV</p></th>
                                  <th width="200px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Ho?? T??n</p></th>
                                  <th width="420px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">C??ng vi????c ????????c giao</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">K????t qua??</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">M???c ????? ho??n th??nh</p></th>												
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">1</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130141</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Nguy???n Ho??ng Minh</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Ho??n thi???n web nh??m v?? web project<br />
                                  - L??m l???i ch???c n??ng Add to cart</p></td>
                                  <td><a href="https://t4kshop.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">20%</p></td>																			
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">2</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130259</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>V?? Ho??ng Trung</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- - Ho??n thi???n web nh??m v?? web project<br />
                                  - L??m l???i ch???c n??ng Add to cart</p> </td>
                                    <td><a href="https://t4kshop.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">20%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">3</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130185</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Ch??u V?? Minh Qu??n </p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- - Ho??n thi???n web nh??m v?? web project<br />
                                  - L??m l???i ch???c n??ng Add to cart</p></td>
                                  <td><a href="https://t4kshop.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">20%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">4</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130070</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>L?? V??n H??o</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- - Ho??n thi???n web nh??m v?? web project<br />
                                  - L??m l???i ch???c n??ng Searching va Filter</p></td>
                                  <td><a href="https://t4kshop.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">20%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">5</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130046</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>????o Xu??n ?????c</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Ho??n thi???n web nh??m v?? web project<br />
                                  - L??m l???i ch???c n??ng Searching v?? Filter
                                    </p></td>
                                    <td><a href="https://t4kshop.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">20%</p></td>																						
                                </tr>
                              </tbody></table>
                          </div>
                          <div id="week10" className="container tab-pane fade">
                            <h3 align="center" style={{marginTop:'10px'}}>WEEK 10<br /></h3><table border={1} align="center">
                              <tbody><tr bgcolor>
                                  <th width="50px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="S??? th??? t???"> STT </p></th>
                                  <th width="100px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center" title="M?? sinh vi??n">Ma?? SV</p></th>
                                  <th width="200px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">Ho?? T??n</p></th>
                                  <th width="420px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">C??ng vi????c ????????c giao</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">K????t qua??</p></th>
                                  <th width="150px"><p style={{color: 'black', fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">M???c ????? ho??n th??nh</p></th>												
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">1</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130141</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Nguy???n Ho??ng Minh</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Ho??n thi???n web nh??m v?? web project<br />
                                  - L??m l???i ch???c n??ng Add to cart<br/>
                                  - L??m trang "Result" cho web nh??m.</p></td>
                                  <td><a href="https://t4kshop.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a>
                                  <a href="https://hci2020group03.tk/Result" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link Result</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">60%</p></td>																			
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">2</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130259</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>V?? Ho??ng Trung</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- - Ho??n thi???n web nh??m v?? web project<br />
                                  - L??m l???i ch???c n??ng Add to cart</p> </td>
                                    <td><a href="https://t4kshop.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">60%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">3</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130185</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>Ch??u V?? Minh Qu??n </p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- - Ho??n thi???n web nh??m v?? web project<br />
                                  - L??m l???i ch???c n??ng Add to cart</p></td>
                                  <td><a href="https://t4kshop.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">60%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">4</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130070</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>L?? V??n H??o</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- - Ho??n thi???n web nh??m v?? web project<br />
                                  - L??m l???i ch???c n??ng Searching va Filter
                                  <br/>
                                  - L??m trang "Result" cho web nh??m.</p></td>
                                  <td><a href="https://t4kshop.tk/" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link</p></a>
                                  <a href="https://hci2020group03.tk/Result" target="blank_"><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center"><i class="fa fa-link" aria-hidden="true"></i> Link Result</p></a></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">60%</p></td>																						
                                </tr>
                                <tr>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">5</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}} align="center">18130046</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>????o Xu??n ?????c</p></td>
                                  <td><p style={{fontSize: '80%', color: 'black',fontFamily:'Arial, Helvetica, sans-serif'}}>- Ho??n thi???n web nh??m v?? web project<br />
                                  - L??m l???i ch???c n??ng Searching v?? Filter
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