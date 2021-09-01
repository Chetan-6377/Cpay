
import React, { useState } from "react";

const Contact = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: "",
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });
    };

    // connect with firebase
    const submitData = async (event) => {
        event.preventDefault();
        const { firstName, lastName, phone, email, address, message } = userData;

        if (firstName && lastName && phone && email && address && message) {
            const res = await fetch(
                "https://reactfirebasewebsite-9a04e-default-rtdb.firebaseio.com/userDataRecords.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        phone,
                        email,
                        address,
                        message,
                    }),
                }
            );

            if (res) {
                setUserData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    address: "",
                    message: "",
                });
                alert("Data Stored");
            } else {
                alert("plz fill the data");
            }
        } else {
            alert("plz fill the data");
        }
    };
    return (
        <>
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="contact-leftside col-12 col-lg-5">
                                    <h1 className="main-heading fw-bold">
                                        Connect with our <br /> Sales team.
                                    </h1>
                                    <p className="main-hero-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo et omnis rem numquam aliquam expedita hic, distinctio deleniti molestiae exercitationem nam veritatis tempore ipsum magni pariatur odit ullam corrupti!</p>
                                    <figure>
                                        <img src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="error" className="img-fluid" />
                                    </figure>
                                </div>
                                {/* **************************************************************************************************** */}


                                <div className="contact-rightside col-12 col-lg-7">
                                    <form method="POST">
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input type="text" name="firstName" className="form-control" id=""
                                                    value={userData.address.firstName} onChange={postUserData} placeholder="First Name" />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input type="text" name="lastName" className="form-control" id=""
                                                    value={userData.address.lastName} onChange={postUserData} placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input type="text" name="phone" className="form-control" id=""
                                                    value={userData.address.phone} onChange={postUserData} placeholder="Phone Number" />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-feild">
                                                <input type="text" name="email" className="form-control" id=""
                                                    value={userData.address.email} onChange={postUserData} placeholder="Email id" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 contact-input-feild">
                                                <input type="text" name="address" className="form-control"
                                                    value={userData.address.address} onChange={postUserData} placeholder="Add Address" id="" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 contact-input-feild">
                                                <input type="text" name="message" className="form-control"
                                                    value={userData.address.message} onChange={postUserData} placeholder="Enter Your Message" id="" />
                                            </div>
                                        </div>
                                        <div className="form-check form-checkbox-style">
                                            <input type="checkbox" name="" className="form-check-input" id="" />
                                            <label htmlFor="" className="form-check-label main-hero-para"> I agree that the C PAY contact me at the email address or phone number above.</label>
                                        </div>
                                        <button type="submit" className="btn-style w-100" onClick={submitData}>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
