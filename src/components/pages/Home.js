import React from 'react';
import Slider from '../inc/Slider';
import Vmc from '../inc/Vmc';
import Service1 from '../images/3.jpg';


function Home() {
    return(
        <div>
            <Slider/>

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Our Physics class</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                                අපගේ පංතිය තුලින් 100% විශය ආවරනය කෙරේ.
                            </p>
                           

                        </div>

                    </div>              

                </div>

            </section>

            {/*our vision, mission and values*/}
            <Vmc/>
            {/*our Services*/}
            <section className="section  border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">Our Services</h3>
                            <div className="underline mx-auto"></div>
                            
                            
                           

                        </div>
                        <div className="col-md-4 text-left">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                   <h6>Service 1</h6>
                                   <div className="underline"></div>
                                   <p>Enter details</p>
                                </div>
                            </div>
                        </div>  

                        <div className="col-md-4 text-left">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                   <h6>Service 1</h6>
                                   <div className="underline"></div>
                                   <p>Enter details</p>
                                </div>
                            </div>
                        </div> 

                        <div className="col-md-4 text-left">
                            <div className="card shadow">
                                <img src={Service1} className="w-100 border-bottom" alt="Services"/>
                                <div className="card-body">
                                   <h6>Service 1</h6>
                                   <div className="underline"></div>
                                   <p>Enter details</p>
                                   {/*<link to="/contact" className="btn ">Read more</link>*/}
                                </div>
                            </div>
                        </div> 
                            
                        

                    </div>              

                </div>

            </section>
        </div>
    );

}
export default Home;