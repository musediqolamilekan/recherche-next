import Image from "next/image";
import React from "react";
import ceo from '../../assets/img/ceo.jpg'

function WhoWeAre() {
    return (
        <section className="we-are">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="we-are__left">
                            <div className="top">
                                <div className="we-are__item">
                                    <Image alt="We Are 1" src={ceo} width="330px" height="396px" />
                                </div>
                                <div
                                    className="we-are__item"
                                    style={{
                                    marginTop: "10px"
                                }}>
                                    <h4>Ini Wisdom</h4>
                                    <h6>CEO/Creative Director
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-12">
                        <div className="we-are__right">
                            <h2>we are recherché</h2>

                            <h5>
                                We are committed to creating functional elegant spaces with expertise in
                                Residential, Commercial and Retail services
                            </h5>
                            <p className="m-b-10">
                                Our interior design team brings a high level of creativity to every project. We
                                provide comprehensive designs that reflects your taste, budget and style. Our
                                services provide our clients with a personal connection to their space through
                                Furniture, Textures, Accessories, Colours and overall Spatial arrangement.
                            </p>
                            <p>
                                Our passion is to create designs that represent your unique and personal style,
                                creating a space you will love for years.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhoWeAre;
