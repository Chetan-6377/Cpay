import React from 'react'

const Header = () => {
    return <>
        <header>
            <section className="container main-hero-container">
                <div className="row">
                    <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center align-items-start flex-column order-lg-first order-last">
                        <h1 className="display-2">Online Payment Made <br /> Easy For You</h1>
                        <p className="main-hero-para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi asperiores quaerat provident impedit eligendi rem est blanditiis, error id itaque ipsum quam sint at labore nulla velit vitae voluptatum magni?</p>
                        <h3>Get early access for you</h3>
                        <div className="input-group mt-3">
                            <input type="text" placeholder="ENTER YOUR EMAIL" className=" rounded-pill w-50 w-lg-75 me-3 p-2 form-control-text" />
                            <div className="input-group-text">Get it now</div>
                        </div>
                    </div>
                    {/* ***********************right side******************** */}
                    <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-start order-md-first order-sm-first ">
                        <img src="https://images.pexels.com/photos/1467435/pexels-photo-1467435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=540" alt="Loading image error" className="image-fluid" />
                        <img src="https://images.pexels.com/photos/3695352/pexels-photo-3695352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=440" alt="Loading image error" className="image-fluid image-2" />

                    </div>
                </div>
            </section>
        </header>
    </>
}

export default Header
