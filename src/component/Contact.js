import React, { Component } from 'react';
import Header2 from './Header2';
import Footer from './Footer';

class Contact extends Component {
    render() {
        return (
            <div>
                <Header2/>
                 {/*Contact Start*/}
        <section className="contact-us" id="contact">
          <div className="container">
          <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="Home">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                            </ol>
                        </nav>
            <div className="row align-items-top">
              <div className="col-lg-5 order-lg-2 wow fadeInRight">
                <div className="contact-detail">
                  <div className="contact-dots" data-dots />
                  {/*Heading*/}
                  <div className="heading-area pb-5">
                    <h2 className="title mt-0 pb-1">Contact Us</h2>
                    <p className="para">We always support you wholeheartedly.</p>
                  </div>
                  {/*Address*/}
                  <ul className="address list-unstyled">
                    <li>
                      <span className="address-icon gradient-text2"><i aria-hidden="true" className="fas fa-map-marker-alt" /></span>
                      <span className="address-text">Quarter 6, Thu Duc District, Ho Chi Minh City</span>
                    </li>
                    <li>
                      <span className="address-icon gradient-text2"><i aria-hidden="true" className="fas fa-phone-volume" /></span>
                      <span className="address-text"><a className="mr-3" href="javascript:void(0)">+84 974 838 004</a><a href="javascript:void(0)">+84 395 956 546</a></span>
                    </li>
                    <li>
                      <span className="address-icon gradient-text2"><i aria-hidden="true" className="fas fa-paper-plane" /></span>
                      <span className="address-text"><a className="mr-3 alt-color" href="javascript:void(0)">minhq634@gmail.com</a></span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7 mt-4 pt-3 mt-lg-0 pt-lg-0 wow fadeInLeft">
                {/*Heading*/}
                <div className="heading-area pb-2">
                  <h2 className="title mt-0">Get In Touch</h2>
                </div>
                {/*Contact Form*/}
                <form className="contact-form">
                  <div className="row">
                    {/*Result*/}
                    <div className="col-12" id="result" />
                    {/*Left Column*/}
                    <div className="col-md-5">
                      <div className="form-group">
                        <input className="form-control" id="your_name" name="your_name" placeholder="Name" required type="text" />
                      </div>
                      <div className="form-group">
                        <input className="form-control" id="your_email" name="your_email" placeholder="Email" required type="email" />
                      </div>
                      <div className="form-group">
                        <input className="form-control" id="subject" name="subject" placeholder="Subject" required type="text" />
                      </div>
                    </div>
                    {/*Right Column*/}
                    <div className="col-md-7">
                      <div className="form-group">
                        <textarea className="form-control" id="message" name="message" placeholder="Message" defaultValue={""} />
                      </div>
                    </div>
                    {/*Button*/}
                    <div className="col-md-12">
                      <a className="btn btn-large btn-rounded btn-purple btn-hvr-blue d-block mt-4" href="javascript:void(0);" id="submit_btn">Send Message
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
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/*Contact End*/}
                <Footer/>
                
            </div>
        );
    }
}

export default Contact;