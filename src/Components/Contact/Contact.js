import React from 'react'
import './contact.css'
const contact = () => {
    return (
        <div>
            <section className="c bg-light ">
                <div className="container contact p-5">
                    <div className="nk-gap-5"></div>
                    <div className="row vertical-gap">
                        <div className="col-md-5 col-sm-12">

                            <h2 className="font-weight-light">Contact With Us:</h2>
                            <div className="nk-gap "></div>

                            <p>Praesent interdum congue mauris, et fringilla lacus pel vitae. Quisque nisl mauris, aliquam eu ultrices vel, conse vitae sapien at imperdiet risus. Quisque cursus risus id. fermentum, in auctor quam consectetur.</p>

                            <ul className="nk-contact-info">
                                <li>
                                    <strong>Address:</strong> 10111 Santa Monica Boulevard, LA</li>
                                <li>
                                    <strong>Phone:</strong> +44 987 065 908</li>
                                <li>
                                    <strong>Email:</strong> info@Example.com</li>
                                <li>
                                    <strong>Fax:</strong> +44 987 065 909</li>
                            </ul>
                        </div>
                        <div className="col-md-7 sm-12">
                            <form action="#">
                                <div className="row">
                                <div class="form-group my-2">
                                        <label for="exampleInputEmail1">Your Name</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                                       
                                    </div>



                                    <div class="form-group my-2">
                                        <label for="exampleInputEmail1">Your Email</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        
                                    </div>
                                </div>
                                <div className="nk-gap-1"></div>
                                <textarea className="form-control required" name="message" rows="8" placeholder="Your Comment" aria-required="true"></textarea>
                                <div className="nk-gap-1"></div>
                                <div className="nk-form-response-success"></div>
                                <div className="nk-form-response-error"></div>
                                <button className="btn  my-3">Send Message</button>
                            </form>

                        </div>
                    </div>
                    <div className="nk-gap-5"></div>
                </div>
            </section>

        </div>
    )
}

export default contact