import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import apiservices from "../ApiServices/ApiServices"
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
const Contact = () => {
    const nav = useNavigate()
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[subject,setSubject]=useState()
    const[contact,setContact]=useState()
    const[message,setMessage]=useState()
  
    const handelForm = (e) => {
        e.preventDefault()
       let data={
        name:name,
        email:email,
        subject:subject,
        message:message,
        contact:contact,
       }
        
        apiservices.contact(data).then(
            (x)=>{
                if(x.data.success===true){
               
               setTimeout(
				() => {
				  nav("/")
				}, 1000
			  )
              toast.success("Message sent")
                }
                else{
  
                    toast.error("Error try again ")
                }
  
            }
  
  
        ).catch("Message in msg sending")
        }
  return (
    <div>
       {/* <!-- Contact Start --> */}
    <div className="container-xxl py-6">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxwidth: "500px"}}>
                <p className="text-primary text-uppercase mb-2">// Contact Us</p>
                <h1 className="display-6 mb-4">If You Have Any Query, Please Contact Us</h1>
            </div>
            <div className="row g-0 justify-content-center">
                <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
                    <p className="text-center mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                    <form onSubmit={handelForm}>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="subject" placeholder="Your Contact Number"value={contact} onChange={(e)=>{setContact(e.target.value)}}/>
                                    <label for="subject">Mobile Number</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject"value={subject} onChange={(e)=>{setSubject(e.target.value)}}/>
                                    <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: "200px"}}value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact End -->


    <!-- Google Map Start --> */}
    <div className="container-xxl py-6 px-0 wow fadeInUp" data-wow-delay="0.1s">
        <iframe className="w-100 mb-n2" style={{height: "450px"}}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
            frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
    {/* <!-- Google Map End --> */}
    <ToastContainer/>
    </div>
  )
}

export default Contact
