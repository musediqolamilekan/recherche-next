import React from "react";

function OurProcess() {
    return (
        <section className="our-process">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-12">
                        <h2 className="title">
                            our
                            <span>process</span>
                        </h2>
                        <p className="title-detail">
                            Our design framework is the road map to realizing our vision for each of our
                            clients, gives structure to projects and allows us to focus on providing a
                            tailored service throughout each phase of the design process.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="our-process__item our-process__item--l-b">
                            <h3>
                                <i className="zmdi zmdi-accounts-alt"></i>
                                Study
                            </h3>
                            <p>
                                Our first step includes preliminary studies of the site. We will find out more
                                about you and your design ambitions for the project along with your timescales
                                and budgets, we’ll work with you to build a detailed brief and identify your
                                design needs.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="our-process__item our-process__item--l-t">
                            <h3>
                                <i className="zmdi zmdi-library"></i>
                                Design
                            </h3>
                            <p>
                                Next is the beginning of the creative process. At Recherché, we use the latest
                                trends combined with innovations that give us great ideas. We try to add
                                functionality to your space, develop architectural layouts for your property as
                                we begin to investigate finishes and design styles.{" "}
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="our-process__item our-process__item--l-b">
                            <h3>
                                <i className="zmdi zmdi-puzzle-piece"></i>
                                Implement
                            </h3>
                            <p>
                                Throughout the design development stage, we get into the detail of the scheme.
                                We’ll refine the internal layouts and specify key finishes and materials for the
                                floors, walls, furniture etc. while we define the lighting concepts and other
                                requirements for final sign off. We move to the implementation.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="our-process__item">
                            <h3>
                                <i className="zmdi zmdi-city-alt"></i>
                                Maintain
                            </h3>
                            <p>
                                As the project concludes, we will visit the site to inspect all the works and
                                prepare a schedule of defects if required.
                                <br/>
                                We’ll suggest remedies for the defects and implement same as quickly as
                                possible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurProcess;
