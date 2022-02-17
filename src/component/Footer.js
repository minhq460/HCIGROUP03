import React, { Component } from 'react'  
  
export class Footer extends Component {  
    render() {  
        return (  
            <div>
                {/*Footer Start*/}
                <footer className="footer-style-1 bg-light">
                    <div className="container">
                    <div className="row align-items-center">
                        {/*Social*/}
                        <div className="col-md-6">
                        <div className="footer-social">
                            <ul className="list-unstyled">
                            <li><a className="wow fadeInUp" href="javascript:void(0);"><i aria-hidden="true" className="fab fa-facebook-f" /></a></li>
                            <li><a className="wow fadeInDown" href="javascript:void(0);"><i aria-hidden="true" className="fab fa-twitter" /></a></li>
                            <li><a className="wow fadeInUp" href="javascript:void(0);"><i aria-hidden="true" className="fab fa-google-plus-g" /></a></li>
                            <li><a className="wow fadeInDown" href="javascript:void(0);"><i aria-hidden="true" className="fab fa-linkedin-in" /></a></li>
                            <li><a className="wow fadeInUp" href="javascript:void(0);"><i aria-hidden="true" className="fab fa-instagram" /></a></li>
                            <li><a className="wow fadeInDown" href="javascript:void(0);"><i aria-hidden="true" className="fab fa-pinterest-p" /></a></li>
                            </ul>
                        </div>
                        </div>
                        {/*Text*/}
                        <div className="col-md-6 text-md-right">
                        <p className="company-about fadeIn">Made With Love By <a href="javascript:void(0);">Group03</a>
                        </p>
                        </div>
                    </div>
                    </div>
                </footer>
                {/*Footer End*/}
            </div> 
        )  
    }  
}  
  
export default Footer