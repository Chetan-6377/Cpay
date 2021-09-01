import React from 'react'
import { useState } from 'react/cjs/react.development'
import workApi from './api/wrokApi'


const Middle = () => {
    const [workData,setWorkData]=useState(workApi);
    // console.log(workData);
    return <>
    <section>
        <div className="work-container container">
            <h1 className="main-heading text-center">How does it work</h1>
            <div className="row">
                {workData.map((curElem)=>{
                    const{id,logo,title,info}=curElem;
                    return(
                        <>
                <div className="col-12 col-lg-4 text-center work-container-subdiv">
                        <i className={`icon-style fa-2x ${logo}`}></i>
                        <h2 className="sub-heading">{title}</h2>
                        <p className="main-hero-para w-100">{info}</p>
                </div>
                        </>
                    )
                })}
            </div>
        </div>
    </section>
    </>
}

export default Middle
