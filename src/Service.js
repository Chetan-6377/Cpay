import React from 'react'
import { useState } from 'react/cjs/react.development'
import serviceApi from './api/serviceApi'

const Service = () => {
    const [serviceData,setServiceData]=useState(serviceApi);
    return (
        <>
            <section className="service-main-container">
                <div className="service-container container">
                    <h1 className="main-heading fw-bold text-center">How To Send Money</h1>
                    <div className="row">
                        {serviceData.map((curElem)=>{
                            const{id,logo,title,info}=curElem;
                            return (
                                <>
                            <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv">
                            <i className={`icon-style fa-2x ${logo}`}></i>
                            <h2 className="sub-heading">{title}</h2>
                            <p className="main-hero-para ">{info}</p>
                        </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service
