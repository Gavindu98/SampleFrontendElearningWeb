import React from 'react';

function Footer() {
    return(
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Our Class information</h6>
                        <hr/>
                        <p>
                            add more information of the class
                        </p>
                    </div>
                    {/*<div className="col-md-4">
                        <h6>Quick link</h6>
                        <hr/>
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/about">About</Link></div>
                        <div><Link to="/contact">Contact</Link></div>
                        <div><Link to="/">Home</Link></div>
    </div>*/}
                    <div className="col-md-4">
                        <h6>Contact Links</h6>
                        <hr/>
                        <div><p className="text-white mb-1">address</p></div>
                        <div><p className="text-white mb-1">number</p></div>
                        <div><p className="text-white mb-1">number</p></div>
                        <div><p className="text-white mb-1">mail</p></div>
                        <div><p className="text-white mb-1">webaddres</p></div>

                    </div>
                </div>
            </div>
        </section>
    );
}
export default Footer;