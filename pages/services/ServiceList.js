import Image from "next/image";
import React from "react";
import serviceList01 from '../../assets/img/service-list-01.jpg'
import serviceList02 from '../../assets/img/service-list-02.jpg'
import serviceList03 from '../../assets/img/service-list-03.jpg'
import serviceList04 from '../../assets/img/service-list-04.jpg'
import serviceList05 from '../../assets/img/service-list-05.jpg'

function ServiceList() {
    return (
        <section className="service-list">
            <div className="container">
                <div className="row">
                    <div className="col1">
                        <div className="service-list__item">
                            <Image alt="Service 1" src={serviceList01} width="3500px" height="2100px" />
                            <div className="service-list__text">
                                <h5>
                                    <a href="#">Interior Design</a>
                                </h5>
                                <p>
                                    We offer full range of specialized services from Interior and Exterior works to
                                    Finishing, Furnishing and Maintenance of spaces for real estate developers,
                                    owners of residential houses, apartments, commercial, and other spaces.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col1">
                        <div className="service-list__item1">
                            <Image alt="Service 2" src={serviceList02} width="3500px" height="2100px" />
                            <div className="service-list__text">
                                <h5>
                                    <a href="#">Furniture</a>
                                </h5>
                                <p>
                                    We source for the best furniture and decorative accessories to make spaces even
                                    more aesthetically pleasing.We arrange shipping to far-flung places and are
                                    happy to oversee installation if required.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col1">
                        <div className="service-list__item">
                            <Image alt="Service 3" src={serviceList03} width="3500px" height="2100px" />
                            <div className="service-list__text">
                                <h5>
                                    <a href="#">Lighting</a>
                                </h5>
                                <p>
                                    Lighting is one of the most important interior elements, which we also
                                    specialize in. We offer various lighting solutions to our clients, tailored to
                                    suit each project’s particular needs either comprehensive interior and exterior
                                    lighting design.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col1">
                        <div className="service-list__item1">
                            <Image alt="Service 4" src={serviceList04} width="3500px" height="2100px" />
                            <div className="service-list__text">
                                <h5>
                                    <a href="#">Project Management</a>
                                </h5>
                                <p>
                                    Delivering your project on time, to cost and to the highest quality in an
                                    efficient manner and with minimal disruptions to your day-to-day life is a tall
                                    order that we are dedicated to complete.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col1">
                        <div className="service-list__item">
                            <Image alt="Service 5" src={serviceList05} width="3500px" height="2100px" />
                            <div className="service-list__text">
                                <h5>
                                    <a href="#">Retail Services</a>
                                </h5>
                                <p>
                                    We offer a wide range of high-quality decor accessories and items available for
                                    sale on our social media platforms with purchasing guides and a reliable
                                    logistics procedure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceList;
