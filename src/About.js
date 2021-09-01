import React from 'react'
import { useState } from 'react/cjs/react.development'
import aboutApi from './api/aboutApi'

const About = () => {
    const [aboutData, setData] = useState(aboutApi)
    return (

        <>
            <section className="common-section our-services">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-service-img">
                            <img src="https://images.pexels.com/photos/4067506/pexels-photo-4067506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="error" />
                        </div>
                        {/* *****************right side data* */}

                        <div className="col-12 col-lg-7 our-services-list">
                            <h3 className="mini-title">-- Available @ google and ios app store only</h3>
                            <h1 className="main-heading">HOW to use the app?</h1>

                            {aboutData.map((curElem)=> {
                                const { id, title, info } = curElem;
                                return (
                                    <>
                                        <div className="row our-services-info" key={id}>
                                            <div className="col-1 our-services-number">{id}</div>
                                            <div className="col-10 our-services-data">{title}
                                            <p className="main-hero-para">{info}</p>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                            <br />
                            <button className="btn-style btn-style-border">learn more</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* *****************************************2nd part******************************* */}
            <section className="common-section our-services our-services-rightside">
                <div className="container mb-5">
                    <div className="row">
                      
                        {/* *****************right side data* */}

                        <div className="col-12 col-lg-7 our-services-rightside-content ">
                            <h3 className="mini-title">-- Support in any language</h3>
                            <h1 className="main-heading">world class support is <br /> avaliable 24/7</h1>

                            {aboutData.map((curElem)=> {
                                const { id, title, info } = curElem;
                                return (
                                    <>
                                        <div className="row our-services-info" key={id}>
                                            <div className="col-1 our-services-number">{id}</div>
                                            <div className="col-10 our-services-data">{title}
                                            <p className="main-hero-para">{info}</p>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                            <br />
                            <button className="btn-style btn-style-border">learn more</button>
                        </div>
                        <div className="col-12 col-lg-5  our-service-right-img">
                            <img src="https://images.pexels.com/photos/9333497/pexels-photo-9333497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="error" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
