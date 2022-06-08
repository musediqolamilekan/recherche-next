import React from "react";

function ContactForm() {
    return (
        <>
            <section className="contact-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="m-t-40">
                                <div className="mapouter">
                                    <div className="gmap_canvas">
                                        <iframe
                                            width="600"
                                            height="500"
                                            id="gmap_canvas"
                                            src="https://maps.google.com/maps?q=6.491194725036621,3.6070430278778076&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                            frameBorder="0"
                                            scrolling="no"
                                            marginHeight="0"
                                            marginWidth="0"></iframe>
                                        <a href="https://123movies-a.com"></a>
                                        <br/> {/* <style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style> */}
                                        <a href="https://www.embedgooglemap.net">
                                            how to insert google map into website
                                        </a>
                                        {/* <style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-contact-wrap m-t-40">
                                <h4>Send us a message</h4>
                                <form
                                    className="form-contact js-contact-form"
                                    action="https://freebw.com/templates/arch-v1/includes/contact-form.php"
                                    method="POST"
                                    role="form"
                                    name="contact">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <input type="text" name="name" required placeholder="Your Name*"/>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <input type="email" name="email" placeholder="Your Email*" required/>
                                        </div>
                                        <div className="col-md-12">
                                            <textarea
                                                name="message"
                                                id="message"
                                                className="message"
                                                placeholder="Your Message"
                                                value=""></textarea>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="au-btn au-btn--pill au-btn--yellow au-btn--big">
                                            Contact Us
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-info">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="p-t-30">Contact info</h4>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="p-t-30">
                                <i className="fa fa-home m-r-8"></i>
                                Coop. Villa Estate Badore, Lagos, NG
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="p-t-30">
                                <i className="fa fa-phone m-r-8"></i>
                                (+234) 814 310 1640
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="p-t-30">
                                <i className="fa fa-envelope m-r-8"></i>
                                <a
                                    href="https://freebw.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="e9aa86879d888a9da89b8a81a98e84888085c78a8684">
                                    [email&#160;protected]
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactForm;
